package com.palygronud.antlr.ansible;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class ModuleReader {

    public static void loadAnsibleModules() {


        String ansiblePath = "C:\\dev\\ansible\\modules";



        try {

            Files.walk(Paths.get(ansiblePath)).filter(filePath -> Files.isRegularFile(filePath)
                    && filePath.toString().endsWith(".py")
                    && (!filePath.toString().endsWith("__init__.py")))
            .forEach(System.out::println);
//            long count = Files.walk(Paths.get(ansiblePath)).filter(filePath -> Files.isRegularFile(filePath)
//                    && filePath.toString().endsWith(".py")
//                    && (!filePath.toString().endsWith("__init__.py"))).count();
            //.forEach(System.out::println);

            //System.out.println(count);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
