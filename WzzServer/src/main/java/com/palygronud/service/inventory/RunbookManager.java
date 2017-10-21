package com.palygronud.service.inventory;

import com.palygronud.domain.inventory.Runbook;

import java.util.List;

public interface RunbookManager {

    String YAML = String.join("\n"
            , "---"
            , "# This is the Description"
            , "name: New Runbook"
            , "tags:"
            , "\t- sample"
            , "nodes:"
            , "\t- name: ping something"
            , "\t  provider: ping"

    );

    Runbook createEmptyOne();

    List<Runbook> getAllRunbooks();

    Runbook updateRunbook(Runbook runbook);

    void deleteRunbook(String runbookId);


}
