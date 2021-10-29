package com.itesoft.cx.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
public class VoteEntity implements Serializable {
    private String id;
    private String tenant;
    private Integer star;
    private String comment;
    private String user;
    private Date date;
}
