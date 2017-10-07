package com.palygronud.domain.inventory;

/**
 * Created by: Shihui
 * Date: 10/6/2017
 */

import com.palygronud.domain.common.LastOpInfo;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document
public class Runbook {

    private String id, createdBy, contentYaml;
    private Date createdTime;
    private List<String> tags;
    private LastOpInfo lastOpInfo;

}