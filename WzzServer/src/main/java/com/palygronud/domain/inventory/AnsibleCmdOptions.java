package com.palygronud.domain.inventory;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class AnsibleCmdOptions {
    private final String name;
    private final String description;
    private final String defaultVal;
    private final String version_added;
    private final String alias;
    private final String type;
    private final String choices;
}