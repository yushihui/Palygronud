package com.palygronud.antlr.ansible;


import com.palygronud.antlr.python.FileListener;
import com.palygronud.antlr.python.Python3Lexer;
import com.palygronud.antlr.python.Python3Parser;
import com.palygronud.domain.inventory.AnsibleModule;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.tree.ParseTreeWalker;

import java.io.IOException;
import java.nio.file.Paths;

public class Parser {

    public static void main(String args[]) {

       // parserModuleFile("");
        ModuleReader.loadAnsibleModules();
    }


    public static void parserModuleFile(String path) {

        try {
            CharStream charStream = CharStreams.fromPath(Paths.get("example", "ios_config_copy.py"));
            Python3Lexer lexer = new Python3Lexer(charStream);
            CommonTokenStream tokenStream = new CommonTokenStream(lexer);
            Python3Parser parser = new Python3Parser(tokenStream);
            ParseTreeWalker walker = new ParseTreeWalker();
            FileListener loader = new FileListener();
            walker.walk(loader, parser.file_input());
            AnsibleModule ansibleModule = loader.getAnsibleModule();





        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
