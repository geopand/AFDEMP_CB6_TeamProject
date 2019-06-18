/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.api;

import com.project.coblood.dao.TokenDaoImpl;
import com.project.coblood.dao.UserDaoImpl;
import com.project.coblood.models.User;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author admin
 */
@RestController
public class UserRestApi {

    @Autowired
    public UserDaoImpl userService;
    @Autowired
    public TokenDaoImpl tokenDao;

    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(BloodrequestRestApi.class);

    ResponseEntity createUser(@RequestHeader("token") String token, @RequestBody User user) throws URISyntaxException {
        LOG.info("INIT 'Admin User Creation'" + user.toString());
        User u = tokenDao.validateToken(token);
        userService.createUser(user.getUsername(), user.getPassword());
        return new ResponseEntity(user, HttpStatus.OK);

    }

    @RequestMapping(value = RestURIConstants.ADMIN_DELETE_USER, method = RequestMethod.POST)
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity deleteUser(@RequestHeader("token") String token, @PathVariable("userId") int userId) throws URISyntaxException {

        User user = tokenDao.validateToken(token);
        userService.deleteUser(userId);
        return new ResponseEntity(user, HttpStatus.OK);
    }

    @RequestMapping(value = RestURIConstants.ADMIN_ROLE_USER, method = RequestMethod.POST)
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity roleUser(@RequestHeader("token") String token, @PathVariable("userId") int userId) throws URISyntaxException {

        User user = tokenDao.validateToken(token);
        userService.assignRole(userId, 1);
        return new ResponseEntity(user, HttpStatus.OK);
    }

    @RequestMapping(value = RestURIConstants.ADMIN_USERS, method = RequestMethod.GET)
    @GetMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity getAdminPanelUsers(@RequestHeader("token") String token) throws IOException {
        User user = tokenDao.validateToken(token);
        ArrayList<User> admin_users = userService.getAllUsers();
        return new ResponseEntity(admin_users, HttpStatus.OK);

    }

}
