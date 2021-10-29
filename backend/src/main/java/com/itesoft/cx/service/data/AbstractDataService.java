package com.itesoft.cx.service.data;

import com.itesoft.cx.constant.RestServiceConstant;
import com.itesoft.cx.dao.AbstractDAO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

public class AbstractDataService<DAO extends AbstractDAO<DTO>, DTO> {

    protected final DAO dao;

    public AbstractDataService(DAO dao) {
        this.dao = dao;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<DTO> getAll() {
        return this.dao.getAll();
    }

    @GET
    @Path(RestServiceConstant.ID_REST_PARAM)
    @Produces(MediaType.APPLICATION_JSON)
    public DTO getById(@PathParam(RestServiceConstant.ID_PATH_PARAM) String id) {
        return this.dao.getById(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public DTO update(DTO dto) {
        return this.dao.update(dto);
    }

    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    public void remove(DTO dto) {
        this.dao.remove(dto);
    }

}
