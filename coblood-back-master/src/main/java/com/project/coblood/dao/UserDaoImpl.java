/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.dao;

import com.project.coblood.models.Login;
import com.project.coblood.models.Register;
import com.project.coblood.models.Role;
import com.project.coblood.models.User;
import com.project.coblood.models.UserApi;
import com.project.coblood.security.SaltController;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.sql.DataSource;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

/**
 *
 * @author admin
 */
@Component
public class UserDaoImpl implements UserDao {

    @PersistenceContext
    private EntityManager manager;

    @Autowired
    DataSource datasource;

    @Autowired
    JdbcTemplate jdbcTemplate;

    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(UserDaoImpl.class);

    @Override
    public int registerUser(Register user) {

        int row;

        try {
            SaltController util = new SaltController();
            String salt = "XQAUgAvlP6ed6JoVBsXQVOMUq79f6M" + user.getUsername().trim();
            String password = util.encrypt(user.getPassword(), salt); //TODO
            String sql = "insert into users(username, password, email) values(?,?,?)";
            row = jdbcTemplate.update(sql, new Object[]{user.getUsername(), password, user.getEmail()});
        } catch (DataAccessException e) {
            //TODO
            row = 0;
            LOG.info("SQL error in registerUser");
        }

        return row;

    }

    @Override
    public User validateUser(Login login) {

        List<User> users = new ArrayList<>();
        try {
            SaltController util = new SaltController();
            String salt = "XQAUgAvlP6ed6JoVBsXQVOMUq79f6M" + login.getUsername().trim();
            String password = util.encrypt(login.getPassword(), salt); //TODO
            String sql = "select * from users where users.username=? and users.password=? and users.deleted=0 and users.banned=0";
            users = jdbcTemplate.query(sql, new Object[]{login.getUsername(), password}, new TokenMapper());

        } catch (DataAccessException e) {
            //TODO
            LOG.info("SQL error in validateUser");
        }
        return users.size() == 1 ? users.get(0) : null;

    }

    @Override
    public UserApi responseUser(User user) {

        //TODO exception
        UserApi userApi = new UserApi();
        try {
            userApi.setUserId(user.getUserId());
            userApi.setUsername(user.getUsername());
            userApi.setRole(user.getRole());
        } catch (Exception e) {
            //TODO
            LOG.info("SQL error in responseUser");
        }
        return userApi;

    }

    @Override
    public int getUserIdByUsername(String username) {

        try {
            User user = getUserByUsername(username);
            int userId = user.getUserId();
            return userId;
        } catch (Exception e) {
            //TODO
            LOG.info("SQL error in getUserIdByUsername");
            return 0;
        }
    }

    @Override
    public ArrayList<User> getAllUsers() {

        //TODO exception
        List<User> userList = new ArrayList<>();
        try {
            String sql = "SELECT * FROM users where users.deleted=0 and users.banned=0";
            userList = jdbcTemplate.query(sql, new UserMapper());
        } catch (DataAccessException e) {
            //TODO
        }

        return (ArrayList<User>) userList;

    }

    @Override
    public int createUser(String username, String password) {

        Register user = new Register();
        user.setUsername(username);
        user.setPassword(password);
        int created = registerUser(user);

        return created;
    }

    @Override
    public int deleteUser(int userId) {

        int row;

        try {
            String sql = "update users set users.deleted = 1 where users.userId = ?";
            row = jdbcTemplate.update(sql, new Object[]{userId});
        } catch (DataAccessException e) {
            //TODO
            row = 0;
            LOG.info("SQL error in deleteUser");
        }

        return row;

    }

    @Override
    public int assignRole(int userId, int roleId) {

        int row;
        try {
            String sql = "update users set users.roleId = ? where users.userId = ?";
            row = jdbcTemplate.update(sql, new Object[]{roleId, userId});
        } catch (DataAccessException e) {
            //TODO
            row = 0;
            LOG.info("SQL error in deleteUser");
        }

        return row;

    }

    @Override
    public int authorizedUser(String token) {

        List<User> users = new ArrayList<>();
        try {
            String sql = "select * from tokens, users where tokens.token=?";
            users = jdbcTemplate.query(sql, new Object[]{token}, new TokenMapper());
            if (users.size() == 1) {
                User user = users.get(0);
                return user.getRole().getRoleInt();
            }

        } catch (DataAccessException e) {
            //TODO
            LOG.info("SQL error in authorizedUser");
        }
        return 0;

    }

    @Override
    public User getUserByUsername(String username) {
        //TODO exception

        List<User> usersList = new ArrayList<>();
        try {

            String sql = "SELECT * FROM users WHERE users.username = ?";
            usersList = jdbcTemplate.query(sql, new Object[]{username}, new UserMapper());

        } catch (DataAccessException e) {
            //TODO
        }

        return usersList.size() == 1 ? usersList.get(0) : null;

    }

    @Override
    public User getUserByEmail(String email) {

        //TODO exception
        List<User> usersList = new ArrayList<>();
        try {

            String sql = "SELECT * FROM users WHERE users.email = ?";
            usersList = jdbcTemplate.query(sql, new Object[]{email}, new UserMapper());

        } catch (DataAccessException e) {
            //TODO
        }

        return usersList.size() == 1 ? usersList.get(0) : null;

    }

    public User getUserById(int userId) {
        //TODO exception
        List<User> usersList = new ArrayList<>();
        try {

            String sql = "SELECT * FROM users WHERE users.userId = ?";
            usersList = jdbcTemplate.query(sql, new Object[]{userId}, new UserMapper());

        } catch (DataAccessException e) {
            //TODO
        }

        return usersList.size() == 1 ? usersList.get(0) : null;
    }
}

class UserMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet rs, int arg1) throws SQLException {

        User user = new User();
        user.setUserId(Integer.parseInt(rs.getString("userId")));
        user.setFirstname(rs.getString("firstName"));
        user.setLastname(rs.getString("lastname"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        user.setPhoneNumber(Integer.parseInt(rs.getString("phoneNumber")));
        user.setBloodType(rs.getString("bloodType"));
        int roleInt = Integer.parseInt(rs.getString("roleId"));
        Role role = new Role(roleInt);
        user.setRole(role);
        user.setEmail(rs.getString("email"));

        return user;

    }

}

class TokenMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet rs, int arg1) throws SQLException {

        User user = new User();
        user.setUserId(Integer.parseInt(rs.getString("userId")));
        user.setUsername(rs.getString("username"));
        int roleInt = Integer.parseInt(rs.getString("roleId"));
        Role role = new Role(roleInt);
        user.setRole(role);

        return user;

    }
}
