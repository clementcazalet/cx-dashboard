package com.itesoft.cx.service.data;

import com.itesoft.cx.constant.RestServiceConstant;
import com.itesoft.cx.dao.UserDAO;
import com.itesoft.cx.persistence.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.Path;

@Service
@Path(RestServiceConstant.USER_REST_PATH)
public class UserDataService extends AbstractDataService<UserDAO, UserDTO> {

    @Autowired
    public UserDataService(UserDAO dao) {
        super(dao);
    }

}
