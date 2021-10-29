package com.itesoft.cx.dao;

import com.itesoft.cx.persistence.TenantDTO;
import org.springframework.stereotype.Repository;

@Repository
public class TenantDAO extends AbstractDAO<TenantDTO> {

    public TenantDAO() {
        super(TenantDTO.class);
    }

    public TenantDTO getByName(String name) {
        return this.entityManager
                .createQuery("select t from " + TenantDTO.class.getSimpleName() + " t where t.name=:name", TenantDTO.class)
                .setParameter("name", name)
                .getResultList()
                .stream()
                .findFirst()
                .orElse(null);
    }

}
