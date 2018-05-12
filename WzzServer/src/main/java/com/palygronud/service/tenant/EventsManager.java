package com.palygronud.service.tenant;

import com.palygronud.tenant.Event;

import java.util.List;

public interface EventsManager {


    List<Event> getPublicEvents();

    void createEvent(Event event);

    Event getEventById(String id);
}
