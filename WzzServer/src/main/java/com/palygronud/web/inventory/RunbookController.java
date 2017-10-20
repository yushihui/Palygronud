package com.palygronud.web.inventory;

import com.palygronud.domain.inventory.Runbook;
import com.palygronud.service.inventory.RunbookManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/inventory/runbooks")
@CrossOrigin(origins = "http://localhost:4200")
public class RunbookController {

    private final RunbookManager runbookManager;

    @Autowired
    public RunbookController(RunbookManager runbookManager) {
        this.runbookManager = runbookManager;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.POST, value = "empty")
    public Runbook createEmptyRunbook() {
        return runbookManager.createEmptyOne();
    }
}
