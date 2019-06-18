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
import com.project.coblood.dao.BloodrequestDaoImpl;
import com.project.coblood.dao.TokenDaoImpl;
import com.project.coblood.models.Bloodrequest;
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

@RestController
public class BloodrequestRestApi {

    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(BloodrequestRestApi.class);

    @Autowired
    public BloodrequestDaoImpl requestService;
    @Autowired
    public TokenDaoImpl tokenDao;

    @RequestMapping(value = RestURIConstants.SUBMIT_REQ, method = RequestMethod.POST)
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity createRequest(@RequestHeader("token") String token, @RequestBody Bloodrequest request) throws URISyntaxException {
        LOG.info("INIT 'Request Register'" + request.toString());
        User user = tokenDao.validateToken(token);
        requestService.registerRequest(request, user.getUsername());
        return new ResponseEntity(request, HttpStatus.OK);

    }

    @RequestMapping(value = RestURIConstants.PENDING_REQS, method = RequestMethod.GET)
    @GetMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity getPendingRequests() throws IOException {

        ArrayList<Bloodrequest> pend_reqs = requestService.getPendingRequests();
        return new ResponseEntity(pend_reqs, HttpStatus.OK);

    }

    @RequestMapping(value = RestURIConstants.MY_REQS, method = RequestMethod.GET)
    @GetMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity getMyRequests(@RequestHeader("token") String token) throws IOException {
        User user = tokenDao.validateToken(token);
        ArrayList<Bloodrequest> mine_reqs = requestService.getMyRequests(user.getUsername());
        return new ResponseEntity(mine_reqs, HttpStatus.OK);

    }

    @RequestMapping(value = RestURIConstants.DELETE_REQ, method = RequestMethod.POST)
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity deleteRequest(@RequestHeader("token") String token, @PathVariable("requestId") int requestId) throws URISyntaxException {

        User user = tokenDao.validateToken(token);
        requestService.deleteRequest(user.getUsername(), requestId);
        return new ResponseEntity(requestId, HttpStatus.OK);
    }

    @RequestMapping(value = RestURIConstants.COMPLETE_REQ, method = RequestMethod.POST)
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity completeRequest(@RequestHeader("token") String token, @PathVariable("requestId") int requestId) throws URISyntaxException {

        User user = tokenDao.validateToken(token);
        requestService.completeRequest(user.getUsername(), requestId);
        return new ResponseEntity(requestId, HttpStatus.OK);
    }

    @RequestMapping(value = RestURIConstants.ADMIN_USER_REQS, method = RequestMethod.GET)
    @GetMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity getAdminPanelRequests(@RequestHeader("token") String token) throws IOException {
        User user = tokenDao.validateToken(token);
        ArrayList<Bloodrequest> admin_reqs = requestService.getAllUserRequests();
        return new ResponseEntity(admin_reqs, HttpStatus.OK);

    }
}
