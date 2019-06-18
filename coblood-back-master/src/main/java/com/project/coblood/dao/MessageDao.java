/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.dao;

import com.project.coblood.models.Message;
import com.project.coblood.models.MessageApi;
import java.util.ArrayList;

/**
 *
 * @author admin
 */
public interface MessageDao {
    
//***User + Admin
  
    int sendMessage(String sender, String receiver, String messageData);
    int deleteMessage(String user, int messageId); 
    int readMessages(String username); 
    Message getMessage(int messageId);
    ArrayList<Message> getAllMessages(String username);
    ArrayList<MessageApi> getSentMessages(String username);
    ArrayList<MessageApi> getReceivedMessages(String username); 
    int getUnreadMessages(String username);
    ArrayList<MessageApi> getDeletedMessages(String username);
    int trashMessage (int messageId, String username);
    
//***Admin 
    ArrayList <MessageApi> getAllUserMessages();   
}
