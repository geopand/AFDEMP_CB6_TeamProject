/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.api;

/**
 *
 * @author admin
 */
import com.project.coblood.dao.UserDaoImpl;
import com.project.coblood.models.Register;
import java.net.URISyntaxException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController

public class RegisterRestApi {

    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(RegisterRestApi.class);

    @Autowired
    public UserDaoImpl userService;

    @RequestMapping(value = RestURIConstants.REGISTER, method = RequestMethod.POST)
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity registerUser(@RequestBody Register user) throws URISyntaxException {
        LOG.info("INIT 'User Register'" + user.toString());
        if ((userService.getUserByUsername(user.getUsername()) == null) || (userService.getUserByEmail(user.getEmail()) == null)) {
            userService.registerUser(user);
            return new ResponseEntity(user, HttpStatus.OK);
        }
        return null;

    }
}
