package com.itesoft.cx.dao;

import com.itesoft.cx.persistence.UserDTO;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAO extends AbstractDAO<UserDTO> {

    public UserDAO() {
        super(UserDTO.class);
    }

    public UserDTO getByLogin(String login) {
        return this.entityManager
                .createQuery("select u from " + UserDTO.class.getSimpleName() + " u where u.login=:login", UserDTO.class)
                .setParameter("login", login)
                .getResultList()
                .stream()
                .findFirst()
                .orElse(null);
    }

}
