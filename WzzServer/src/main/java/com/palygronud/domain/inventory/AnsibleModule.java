package com.palygronud.domain.inventory;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

/**
 * Created by: Shihui
 * Date: 3/25/2018
 */

@Data
@Document(collection = "AnsibleModules")
public class AnsibleModule {

    @Id
    private String id;
    private String name;
    private String vendor;
    private Date createdTime;
    private List<AnsibleCmdOptions> options;
    private String author;
    private String desc,sDesc;
    private String extends_Module; //extends_documentation_fragment
    private String notes;
    private String example;
    private String expectReturn;
}
