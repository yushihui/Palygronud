package com.palygronud.domain.common;

/**
 * Created by: Shihui
 * Date: 10/6/2017
 */

import lombok.*;

import java.util.Date;


@Getter
@RequiredArgsConstructor
public class LastOpInfo {

    @NonNull
    private final String userName;
    @NonNull
    private final String userId;
    @NonNull
    private final Date time;

    public static LastOpInfo getLastOpInfo() {
        return new LastOpInfo("admin", "admin", new Date());
    }

}
