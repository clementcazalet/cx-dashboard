package com.itesoft.cx.persistence;

import com.itesoft.cx.constant.PersistenceConstant;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = PersistenceConstant.TENANT_TABLE)
public class TenantDTO extends GenericDTO implements Serializable {

    @Column
    private String name;

    @Column
    @ManyToMany
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<VersionDTO> versions;
}
