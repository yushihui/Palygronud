package com.palygronud.domain.inventory;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by: Shihui
 * Date: 10/6/2017
 */

@Getter
@RequiredArgsConstructor
@Document(collection = "Device")
public class Device {

    @Id
    private String id;
    private boolean isIPAccouting;
    private boolean isIPSLA;
    private boolean isNetflow;
    private boolean isSNMPConfig;
    private int mainType;
    private int subType;
    private String mainTypeName;
    private String mgmtIP;
    private String mpls_asNum;
    private String name;
    private boolean mpls_update;

}
