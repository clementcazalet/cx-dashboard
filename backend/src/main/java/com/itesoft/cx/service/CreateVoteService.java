package com.itesoft.cx.service;

import com.itesoft.cx.constant.RestServiceConstant;
import com.itesoft.cx.dao.TenantDAO;
import com.itesoft.cx.dao.UserDAO;
import com.itesoft.cx.dao.VoteDAO;
import com.itesoft.cx.model.VoteEntity;
import com.itesoft.cx.persistence.TenantDTO;
import com.itesoft.cx.persistence.UserDTO;
import com.itesoft.cx.persistence.VoteDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

@Service
@Path(RestServiceConstant.CREATE_VOTE_REST_PATH)
public class CreateVoteService {

    private final VoteDAO voteDAO;
    private final TenantDAO tenantDAO;
    private final UserDAO userDAO;

    @Autowired
    public CreateVoteService(VoteDAO voteDAO, TenantDAO tenantDAO, UserDAO userDAO) {
        this.voteDAO = voteDAO;
        this.tenantDAO = tenantDAO;
        this.userDAO = userDAO;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(VoteEntity entity) {
        TenantDTO tenant = this.tenantDAO.getByName(entity.getTenant());
        if(tenant == null) {
            tenant = new TenantDTO();
            tenant.setName(entity.getTenant());
            tenant = this.tenantDAO.update(tenant);
        }

        UserDTO user = this.userDAO.getByLogin(entity.getUser());
        if(user == null) {
            user = new UserDTO();
            user.setLogin(entity.getUser());
            user = this.userDAO.update(user);
        }

        VoteDTO vote = new VoteDTO();
        vote.setTenant(tenant);
        vote.setUser(user);
        vote.setComment(entity.getComment());
        vote.setDate(entity.getDate());
        vote.setStar(entity.getStar());

        this.voteDAO.update(vote);
    }

}
