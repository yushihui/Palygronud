package com.palygronud.web.inventory;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InventoryController {

    @RequestMapping("/inventory")
    public String index() {
        return "Greetings from Spring Boot! ok1";
    }

}