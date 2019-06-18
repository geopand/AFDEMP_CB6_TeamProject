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
public class RestURIConstants {

    //PUBLIC
    public static final String REGISTER = "/register";
    public static final String LOGIN = "/login";
    public static final String PENDING_REQS = "/requests/red";

    //ADMIN
    public static final String ADMIN_USERS = "/admin/users";
    public static final String ADMIN_CREATE_USER = "/admin/users/create";
    public static final String ADMIN_DELETE_USER = "/admin/users/delete/{userId}";
    public static final String ADMIN_ROLE_USER = "/admin/users/role/{userId}";
    public static final String ADMIN_USER_MSGS = "/admin/messages";
    public static final String ADMIN_USER_REQS = "/admin/requests";

    public static final String UNREAD_MSGS = "/user/messages/unread";
    public static final String SEND_MSG = "/user/messages/send";
    public static final String DELETE_MSG = "/user/messages/delete/{messageId}";
    public static final String SENT_MSGS = "/user/messages/sent";
    public static final String RECEIVED_MSGS = "/user/messages/received";
    public static final String DELETED_MSGS = "/user/messages/deleted";

    //USER
    public static final String SUBMIT_REQ = "/user/requests/submit";
    public static final String MY_REQS = "/user/requests/myrequests";
    public static final String DELETE_REQ = "/user/requests/delete/{requestId}";
    public static final String COMPLETE_REQ = "/user/requests/complete/{requestId}";

}
