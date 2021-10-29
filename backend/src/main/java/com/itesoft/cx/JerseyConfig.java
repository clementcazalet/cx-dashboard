package com.itesoft.cx;

import org.glassfish.jersey.server.ResourceConfig;

import javax.inject.Named;

@Named
public class JerseyConfig extends ResourceConfig {
    public static final String REST_PACKAGE = "com.itesoft.cx";

    public JerseyConfig() {
        super();
        registerEndpoints();
    }

    private void registerEndpoints() {
        packages(REST_PACKAGE);
    }
}
