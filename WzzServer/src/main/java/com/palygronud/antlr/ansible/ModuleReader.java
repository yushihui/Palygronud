package com.palygronud.antlr.ansible;

import com.palygronud.antlr.python.FileListener;
import com.palygronud.antlr.python.Python3Lexer;
import com.palygronud.antlr.python.Python3Parser;
import com.palygronud.domain.inventory.AnsibleModule;
import com.palygronud.domain.inventory.AnsibleModuleRepository;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.tree.ParseTreeWalker;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ModuleReader {

    private final AnsibleModuleRepository ansibleModuleRepository;

    public ModuleReader(AnsibleModuleRepository ansibleModuleRepository) {
        this.ansibleModuleRepository = ansibleModuleRepository;
    }

    public void loadAnsibleModules() {
        String ansiblePath = "C:\\dev\\ansible\\modules";
        List<AnsibleModule> records = new ArrayList<>();
        try {
            Files.walk(Paths.get(ansiblePath)).filter(filePath -> Files.isRegularFile(filePath)
                    && filePath.toString().endsWith(".py")
                    && (!filePath.toString().endsWith("__init__.py")))
                    .forEach(path -> {
                        AnsibleModule am = parserModuleFile(path);
                        if (am != null) {
                            records.add(am);
                        }
                    });
            ansibleModuleRepository.insert(records);

        } catch (IOException e) {
            e.printStackTrace();
        }


    }

    public AnsibleModule parserModuleFile(Path path) {
        System.out.println("is going to parse file " + path.toString());
        try {
            CharStream charStream = CharStreams.fromPath(path);
            Python3Lexer lexer = new Python3Lexer(charStream);
            CommonTokenStream tokenStream = new CommonTokenStream(lexer);
            Python3Parser parser = new Python3Parser(tokenStream);
            ParseTreeWalker walker = new ParseTreeWalker();
            FileListener loader = new FileListener();
            walker.walk(loader, parser.file_input());
            AnsibleModule ansibleModule = loader.getAnsibleModule();
            if (ansibleModule.getName() != null && !ansibleModule.getName().trim().isEmpty()) {
                ansibleModule.setId(UUID.nameUUIDFromBytes(ansibleModule.getName().getBytes()).toString());
            }
            return ansibleModule;

        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
