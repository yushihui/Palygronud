package com.palygronud.domain.common;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Date;

@Getter
@RequiredArgsConstructor
public class LastOpInfo {

    private String userName, userId;
    private Date time;
}
