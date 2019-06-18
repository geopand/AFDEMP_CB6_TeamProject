/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.dao;

import com.project.coblood.models.Bloodrequest;
import java.util.ArrayList;

/**
 *
 * @author admin
 */
public interface BloodrequestDao {

    public int registerRequest(Bloodrequest bloodneed, String username);
    int deleteRequest(String username, int requestId);
    int completeRequest(String username, int requestId);
    ArrayList<Bloodrequest> getMyRequests(String username);
    ArrayList<Bloodrequest> getPendingRequests();
    ArrayList <Bloodrequest> getAllUserRequests();  

}
