package com.palygronud.web.inventory;


import com.palygronud.antlr.ansible.ModuleReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/inventory/ansible")
public class AnsibleController {


    private final ModuleReader moduleReader;

    @Autowired
    public AnsibleController(ModuleReader moduleReader) {
        this.moduleReader = moduleReader;
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "initialization")
    public void loadAnsibleModules() {
        moduleReader.loadAnsibleModules();
    }
}
