package com.itesoft.cx.service.data;

import com.itesoft.cx.constant.RestServiceConstant;
import com.itesoft.cx.dao.VersionDAO;
import com.itesoft.cx.persistence.VersionDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.Path;

@Service
@Path(RestServiceConstant.VERSION_REST_PATH)
public class VersionDataService extends AbstractDataService<VersionDAO, VersionDTO> {

    @Autowired
    public VersionDataService(VersionDAO dao) {
        super(dao);
    }
}
