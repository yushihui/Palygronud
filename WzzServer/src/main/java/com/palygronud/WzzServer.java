package com.palygronud;

/**
 * Created by: Shihui
 * Date: 10/5/2017
 */

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    private static final Logger logger = LoggerFactory.getLogger(WzzServer.class);

    public static void main(String[] args) {
        try {

            logger.debug("The wzz application is going to start...");
            SpringApplication.run(WzzServer.class, args);

        } catch (Exception e) {
            logger.error("The wzz application failed to start...");

        }

    }

}

