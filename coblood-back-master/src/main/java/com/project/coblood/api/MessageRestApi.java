/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.coblood.dao.MessageDaoImpl;
import com.project.coblood.dao.TokenDaoImpl;
import com.project.coblood.dao.UserDaoImpl;
import com.project.coblood.models.Compose;
import com.project.coblood.models.Message;
import com.project.coblood.models.MessageApi;
import com.project.coblood.models.User;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author admin
 */
@RestController
public class MessageRestApi {

    @Autowired
    public MessageDaoImpl messageService;
    @Autowired
    public UserDaoImpl userService;
    @Autowired
    public TokenDaoImpl tokenDao;

    @RequestMapping(value = RestURIConstants.UNREAD_MSGS, method = RequestMethod.GET)
    @GetMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity getUserUnreadMessages(@RequestHeader("token") String token) throws IOException {

        User user = tokenDao.validateToken(token);
        int num = messageService.getUnreadMessages("admin");
        String number = "{\"number\":\"" + num + "\"}";
        ObjectMapper mapper = new ObjectMapper();
        JsonNode json = mapper.readTree(number);
        return new ResponseEntity(json, HttpStatus.OK);
    }

    @RequestMapping(value = RestURIConstants.RECEIVED_MSGS, method = RequestMethod.GET)
    @GetMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<ArrayList<Message>>
            getReceivedMessages(@RequestHeader("token") String token) throws IOException {

        User user = tokenDao.validateToken(token);
        ArrayList<MessageApi> rec_msgs = messageService.getReceivedMessages(user.getUsername());
        messageService.readMessages(user.getUsername());
        return new ResponseEntity(rec_msgs, HttpStatus.OK);
    }

    @RequestMapping(value = RestURIConstants.SENT_MSGS, method = RequestMethod.GET)
    @GetMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<ArrayList<Message>>
            getSentMessages(@RequestHeader("token") String token) throws IOException {

        User user = tokenDao.validateToken(token);
        ArrayList<MessageApi> sent_msgs = messageService.getSentMessages(user.getUsername());
        return new ResponseEntity(sent_msgs, HttpStatus.OK);
    }

    @RequestMapping(value = RestURIConstants.DELETED_MSGS, method = RequestMethod.GET)
    @GetMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<ArrayList<Message>>
            getDeletedMessages(@RequestHeader("token") String token) throws IOException {

        User user = tokenDao.validateToken(token);
        ArrayList<MessageApi> del_msgs = messageService.getDeletedMessages(user.getUsername());
        return new ResponseEntity(del_msgs, HttpStatus.OK);
    }

    @RequestMapping(value = RestURIConstants.SEND_MSG, method = RequestMethod.POST)
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity sendMessage(@RequestHeader("token") String token, @RequestBody String compose) throws URISyntaxException, IOException {

        User user = tokenDao.validateToken(token);
        ObjectMapper mapper = new ObjectMapper();
        Compose obj = mapper.readValue(compose, Compose.class);
        messageService.sendMessage(user.getUsername(), obj.getTo(), obj.getMessage());
        return new ResponseEntity(obj, HttpStatus.OK);
    }

    @RequestMapping(value = RestURIConstants.DELETE_MSG, method = RequestMethod.POST)
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody
    ResponseEntity deleteMessage(@RequestHeader("token") String token, @PathVariable("messageId") int messageId) throws URISyntaxException {

        User user = tokenDao.validateToken(token);
        messageService.deleteMessage(user.getUsername(), messageId);
        return new ResponseEntity(messageId, HttpStatus.OK);
    }

    @RequestMapping(value = RestURIConstants.ADMIN_USER_MSGS, method = RequestMethod.GET)
    @GetMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<ArrayList<MessageApi>>
            getAdminPanelMessages(@RequestHeader("token") String token) throws IOException {

        User user = tokenDao.validateToken(token);
        ArrayList<MessageApi> admin_msgs = messageService.getAllUserMessages();
        return new ResponseEntity(admin_msgs, HttpStatus.OK);
    }

}
