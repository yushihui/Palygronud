package com.palygronud.domain.inventory;


import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by: Shihui
 * Date: 10/6/2017
 */
public interface RunbookRepository extends MongoRepository<Runbook, String> {
}
