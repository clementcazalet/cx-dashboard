package com.itesoft.cx.service.data;

import com.itesoft.cx.constant.RestServiceConstant;
import com.itesoft.cx.dao.VoteDAO;
import com.itesoft.cx.persistence.VoteDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.Path;

@Service
@Path(RestServiceConstant.VOTE_REST_PATH)
public class VoteDataService extends AbstractDataService<VoteDAO, VoteDTO> {

    @Autowired
    public VoteDataService(VoteDAO dao) {
        super(dao);
    }
}
