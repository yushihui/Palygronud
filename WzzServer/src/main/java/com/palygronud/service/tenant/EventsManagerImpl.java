package com.palygronud.service.tenant;

import com.palygronud.tenant.Event;
import com.palygronud.tenant.EventRepository;
import com.palygronud.tenant.Scope;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventsManagerImpl implements EventsManager {

    private final EventRepository eventsRepository;

    public EventsManagerImpl(EventRepository eventsRepository) {
        this.eventsRepository = eventsRepository;
    }

    @Override
    public List<Event> getPublicEvents() {
        return eventsRepository.findByScope(Scope.PUBLIC);
    }

    @Override
    public void createEvent(Event event) {
        eventsRepository.save(event);
    }

    @Override
    public Event getEventById(String id) {
        return eventsRepository.findOne(id);
    }
}
