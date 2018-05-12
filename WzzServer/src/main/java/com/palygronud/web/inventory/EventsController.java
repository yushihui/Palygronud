package com.palygronud.web.inventory;


import com.palygronud.service.tenant.EventsManager;
import com.palygronud.tenant.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://192.168.32.48:4200")
public class EventsController {


    private final EventsManager eventsManager;

    @Autowired
    public EventsController(EventsManager eventsManager) {
        this.eventsManager = eventsManager;
    }


    @RequestMapping(method = RequestMethod.GET, value = "public")
    public List<Event> getAllPublicEvents() {
        return eventsManager.getPublicEvents();
    }
}
