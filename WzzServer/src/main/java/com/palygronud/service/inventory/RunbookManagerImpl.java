package com.palygronud.service.inventory;

import com.palygronud.domain.common.LastOpInfo;
import com.palygronud.domain.inventory.Runbook;
import com.palygronud.domain.inventory.RunbookNode;
import com.palygronud.domain.inventory.RunbookRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

/**
 * Created by: Shihui
 * Date: 10/19/2017
 */
@Service
public class RunbookManagerImpl implements RunbookManager {

    private final RunbookRepository runbookRepository;

    private List<String> NODES = List.of("ping a router", "show config", "do a rest api", "push some config change",
            "run a Qapp", "do a compare...", "run an Ansible play-book", "get CPU & memory", "do a snmp...", "do a snap-shot");


    public RunbookManagerImpl(RunbookRepository runbookRepository) {
        this.runbookRepository = runbookRepository;
    }

    @Override
    public Runbook createEmptyOne() {
        Runbook rb = new Runbook();
        Random r = new Random();
        int index = r.ints(100, 10000).findFirst().getAsInt();
        rb.setId(UUID.randomUUID().toString());
        rb.setContentYaml(YAML);
        rb.setCreatedBy("admin");
        rb.setLastOpInfo(LastOpInfo.getLastOpInfo());
        rb.setCreatedTime(rb.getLastOpInfo().getTime());
        rb.setNodes(getRndNodes());
        rb.setName("Runbook - " + index);
        rb = runbookRepository.insert(rb);
        return rb;
    }

    private List<RunbookNode> getRndNodes() {
        List<RunbookNode> nodes = new ArrayList<>();
        Random r = new Random();
        int size = r.ints(5, 7
        ).findFirst().getAsInt();
        for (int i = 0; i < size; i++) {
            int rnd = r.ints(0, 10).findFirst().getAsInt();
            nodes.add(new RunbookNode(NODES.get(rnd), ""));
        }
        return nodes;
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
