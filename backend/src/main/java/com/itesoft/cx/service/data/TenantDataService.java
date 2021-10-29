package com.itesoft.cx.service.data;

import com.itesoft.cx.constant.RestServiceConstant;
import com.itesoft.cx.dao.TenantDAO;
import com.itesoft.cx.persistence.TenantDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.Path;

@Service
@Path(RestServiceConstant.TENANT_REST_PATH)
public class TenantDataService extends AbstractDataService<TenantDAO, TenantDTO> {

    @Autowired
    public TenantDataService(TenantDAO dao) {
        super(dao);
    }

}
