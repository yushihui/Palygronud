package com.palygronud.service.inventory;

import com.palygronud.domain.common.LastOpInfo;
import com.palygronud.domain.inventory.Runbook;
import com.palygronud.domain.inventory.RunbookRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * Created by: Shihui
 * Date: 10/19/2017
 */
@Service
public class RunbookManagerImpl implements RunbookManager {

    private final RunbookRepository runbookRepository;

    public RunbookManagerImpl(RunbookRepository runbookRepository) {
        this.runbookRepository = runbookRepository;
    }

    @Override
    public Runbook createEmptyOne() {
        Runbook rb = new Runbook();
        rb.setId(UUID.randomUUID().toString());
        rb.setContentYaml(YAML);
        rb.setCreatedBy("admin");
        rb.setLastOpInfo(LastOpInfo.getLastOpInfo());
        rb = runbookRepository.insert(rb);
        return rb;
    }

    @Override
    public List<Runbook> getAllRunbooks() {
        return runbookRepository.findAll();
    }

    @Override
    public Runbook updateRunbook(Runbook runbook) {
        return null;
    }

    @Override
    public void deleteRunbook(String runbookId) {

        runbookRepository.delete(runbookId);

    }

}
