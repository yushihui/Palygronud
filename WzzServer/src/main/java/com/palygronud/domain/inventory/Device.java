package com.palygronud.domain.inventory;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

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
    @Indexed
    private int mainType;
    @Indexed
    private int subType;
    private String mainTypeName;

    @Indexed
    private String mgmtIP;

    @Field("mpls_asNum")
    private String mplsAsNum;

    @Indexed
    private String name;

    @Field("mpls_update")
    private boolean mplsUpdate;

}
