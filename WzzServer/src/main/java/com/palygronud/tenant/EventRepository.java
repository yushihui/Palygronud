package com.palygronud.tenant;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface EventRepository extends MongoRepository<Event, String> {

    List<Event> findByScope(Scope scope);

}
