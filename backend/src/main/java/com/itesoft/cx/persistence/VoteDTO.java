package com.itesoft.cx.persistence;

import com.itesoft.cx.constant.PersistenceConstant;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = PersistenceConstant.VOTE_TABLE)
public class VoteDTO extends GenericDTO implements Serializable {

    @ManyToOne
    private TenantDTO tenant;

    @Column
    private Integer star;

    @Column(length = 2000)
    private String comment;

    @Column
    private Date date;

    @ManyToOne
    private UserDTO user;
}
