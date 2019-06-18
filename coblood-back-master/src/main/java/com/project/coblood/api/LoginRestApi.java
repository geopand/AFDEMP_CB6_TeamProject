/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.api;

import com.project.coblood.dao.TokenDaoImpl;
import com.project.coblood.dao.UserDaoImpl;
import com.project.coblood.models.Login;
import com.project.coblood.models.User;
import java.net.URISyntaxException;
import javax.servlet.http.HttpServlet;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.project.coblood.models.UserApi;

/**
 *
 * @author admin
 */
@RestController
public class LoginRestApi extends HttpServlet {

    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(LoginRestApi.class);

    @Autowired
    public UserDaoImpl userService;
    @Autowired
    public TokenDaoImpl tokenDao;

    @RequestMapping(value = RestURIConstants.LOGIN, method = RequestMethod.POST)
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity loginUser(@RequestBody Login login) throws URISyntaxException {

        User user = userService.validateUser(login);
        UserApi userAuth = userService.responseUser(user);
        userAuth.setToken(tokenDao.assignToken(user));
        return new ResponseEntity(userAuth, HttpStatus.OK);

    }

}
