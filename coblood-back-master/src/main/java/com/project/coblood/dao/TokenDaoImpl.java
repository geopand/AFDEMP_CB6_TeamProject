/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.dao;

import com.project.coblood.models.User;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

/**
 *
 * @author admin
 */
@Component
public class TokenDaoImpl implements TokenDao {

    @PersistenceContext
    private EntityManager manager;

    @Autowired
    DataSource datasource;

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public String assignToken(User user) {
        String uuid = UUID.randomUUID().toString();
        // Keep token in DB
        String sql = "insert into tokens(userId, token) values(?,?)";
        jdbcTemplate.update(sql, new Object[]{user.getUserId(), uuid});
        return uuid;

    }

    @Override
    public User validateToken(String token) {
        //TODO exception
        List<User> users = new ArrayList<>();
        try {
            String sql = "SELECT * FROM tokens, users WHERE tokens.token = ? and tokens.userId = users.userId";
            users = jdbcTemplate.query(sql, new Object[]{token}, new TokenMapper());
        } catch (DataAccessException e) {
            //TODO
        }
        return users.size() > 0 ? users.get(0) : null;
    }

}
