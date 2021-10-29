package com.itesoft.cx.dao;

import com.itesoft.cx.persistence.VoteDTO;
import org.springframework.stereotype.Repository;

@Repository
public class VoteDAO extends AbstractDAO<VoteDTO> {

    public VoteDAO() {
        super(VoteDTO.class);
    }
}
