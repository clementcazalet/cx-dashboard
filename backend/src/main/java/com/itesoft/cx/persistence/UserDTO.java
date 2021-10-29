package com.itesoft.cx.persistence;

import com.itesoft.cx.constant.PersistenceConstant;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = PersistenceConstant.USER_TABLE)
public class UserDTO extends GenericDTO implements Serializable {

    @Column
    private String login;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String title;
}
