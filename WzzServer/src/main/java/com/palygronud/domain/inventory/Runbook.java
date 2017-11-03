package com.palygronud.domain.inventory;

/**
 * Created by: Shihui
 * Date: 10/6/2017
 */

import com.palygronud.domain.common.LastOpInfo;
import com.palygronud.domain.common.RunbookShareType;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document(collection = "Runbook")
public class Runbook {

    @Id
    private String id;
    private String name, createdBy, contentYaml;
    private Date createdTime;
    private List<String> tags;
    private LastOpInfo lastOpInfo;
    private List<RunbookNode> nodes;
    private String description;
    private RunbookShareType shareType;

}
