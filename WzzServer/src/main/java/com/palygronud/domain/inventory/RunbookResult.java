package com.palygronud.domain.inventory;

/**
 * Created by: Shihui
 * Date: 10/6/2017
 */


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class RunbookResult {

    @Id
    private String id;
    private String runbookId;
    private String taskName;
}
