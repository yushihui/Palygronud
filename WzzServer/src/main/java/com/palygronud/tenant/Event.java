package com.palygronud.tenant;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Getter
@RequiredArgsConstructor
@Document(collection = "Events")
public class Event {

    @Id
    private String id;

    @Indexed
    private EventTypes eventType;

    @Indexed
    private Scope scope;

    @Indexed
    private Date createdTime;

    @Field("subject")
    private String subject;

    private String content;

    @Field("from")
    private String from;

}
