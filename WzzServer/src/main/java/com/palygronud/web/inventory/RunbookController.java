package com.palygronud.web.inventory;

import com.palygronud.domain.inventory.Runbook;
import com.palygronud.service.inventory.RunbookManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventory/runbooks")
@CrossOrigin(origins = "http://192.168.32.48:4200")
public class RunbookController {

    private final RunbookManager runbookManager;

    @Autowired
    public RunbookController(RunbookManager runbookManager) {
        this.runbookManager = runbookManager;
    }

    @RequestMapping(method = RequestMethod.POST, value = "empty")
    public Runbook createEmptyRunbook() {
        return runbookManager.createEmptyOne();
    }

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Runbook> getAllRunbooks() {
        return runbookManager.getAllRunbooks();
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "{id}")
    public boolean deleteRunbook(@PathVariable String id) {
        runbookManager.deleteRunbook(id);
        return true;
    }
}
