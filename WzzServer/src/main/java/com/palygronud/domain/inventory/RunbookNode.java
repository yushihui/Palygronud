package com.palygronud.domain.inventory;

import com.palygronud.domain.common.TaskType;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * Created by: Shihui
 * Date: 10/10/2017
 */
@Getter
@RequiredArgsConstructor
public class RunbookNode {
    private String name;
    private TaskType taskType;
}