package com.palygronud.domain.inventory;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnsibleCmdOptions {
    private String name;
    private String description;
    private String defaultVal;
    private String version_added;
    private String alias;
    private String type;
    private String choices;

    public AnsibleCmdOptions(String name) {
        this.name = name;
    }
}