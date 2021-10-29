package com.itesoft.cx.dao;

import com.itesoft.cx.persistence.VersionDTO;
import org.springframework.stereotype.Repository;

@Repository
public class VersionDAO extends AbstractDAO<VersionDTO> {

    public VersionDAO() {
        super(VersionDTO.class);
    }
}
