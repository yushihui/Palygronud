package com.palygronud.domain.common;

/**
 * Created by: Shihui
 * Date: 10/6/2017
 */

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Date;

@Getter
@RequiredArgsConstructor
public class LastOpInfo {

    private String userName, userId;
    private Date time;
}
