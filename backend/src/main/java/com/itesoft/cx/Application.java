package com.itesoft.cx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    private static final Class<Application> APP_CLASS = Application.class;

    public static void main(String[] args) {
        final ConfigurableApplicationContext applicationContext = SpringApplication.run(APP_CLASS, args);
        Runtime.getRuntime().addShutdownHook(new Thread(applicationContext::close));
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(APP_CLASS);
    }

}
