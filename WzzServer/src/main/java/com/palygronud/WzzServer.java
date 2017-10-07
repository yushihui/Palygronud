package com.palygronud;

/**
 * Created by: Shihui
 * Date: 10/5/2017
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan
@SpringBootApplication
public class WzzServer {

    public static void main(String[] args) {
        SpringApplication.run(WzzServer.class, args);
    }

}

