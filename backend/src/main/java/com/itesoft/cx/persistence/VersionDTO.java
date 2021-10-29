package com.itesoft.cx.persistence;

import com.itesoft.cx.constant.PersistenceConstant;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = PersistenceConstant.VERSION_TABLE)
public class VersionDTO extends GenericDTO implements Serializable {

    @Column
    private String name;

    @Column
    private Date date;
}
