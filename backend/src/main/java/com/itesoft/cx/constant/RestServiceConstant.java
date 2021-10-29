package com.itesoft.cx.constant;

public class RestServiceConstant {
    public static final String CREATE_VOTE_REST_PATH = "/create";

    public static final String DATA_BASE_REST_PATH = "/data";

    public static final String TENANT_REST_PATH = DATA_BASE_REST_PATH + "/tenant";
    public static final String USER_REST_PATH = DATA_BASE_REST_PATH + "/user";
    public static final String VERSION_REST_PATH = DATA_BASE_REST_PATH + "/version";
    public static final String VOTE_REST_PATH = DATA_BASE_REST_PATH + "/vote";

    public static final String ID_REST_PARAM = "/{id}";
    public static final String ID_PATH_PARAM = "id";
}
