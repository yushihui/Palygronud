package com.palygronud.domain.inventory;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by: Shihui
 * Date: 10/6/2017
 */

public interface DevicevRepository extends MongoRepository<Device, String> {

    Device findByMgmtIP(String mgmtIP);
}

