package com.project.coblood.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="messages")
public class MessageApi implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="messageId")
    private int messageId;
    
    @Column (name="messageData")
    private String messageData;
    
    @Column (name="dateInfo")
    private String dateInfo;
    
    @Column (name="sender")
    private String sender;
    
    @Column (name="receiver")
    private String receiver;
    
    @Column (name="deleteBySender")
    private int deleteBySender;
    
    @Column (name="deleteByReceiver")
    private int deleteByReceiver;
    
    @Column (name="deleteByAdmin")
    private int deleteByAdmin;
    
    public MessageApi(){
        
    }

    public MessageApi(int messageId, String messageData, String dateInfo, String sender, String receiver, int deleteBySender, int deleteByReceiver, int deleteByAdmin) {
        this.messageId = messageId;
        this.messageData = messageData;
        this.dateInfo = dateInfo;
        this.sender = sender;
        this.receiver = receiver;
        this.deleteBySender = deleteBySender;
        this.deleteByReceiver = deleteByReceiver;
        this.deleteByAdmin = deleteByAdmin;
    }

    public int getDeleteBySender() {
        return deleteBySender;
    }

    public void setDeleteBySender(int deleteBySender) {
        this.deleteBySender = deleteBySender;
    }

    public int getDeleteByReceiver() {
        return deleteByReceiver;
    }

    public void setDeleteByReceiver(int deleteByReceiver) {
        this.deleteByReceiver = deleteByReceiver;
    }

    public int getDeleteByAdmin() {
        return deleteByAdmin;
    }

    public void setDeleteByAdmin(int deleteByAdmin) {
        this.deleteByAdmin = deleteByAdmin;
    }

    public int getMessageId() {
        return messageId;
    }

    public void setMessageId(int messageId) {
        this.messageId = messageId;
    }

    public String getMessageData() {
        return messageData;
    }

    public void setMessageData(String messageData) {
        this.messageData = messageData;
    }

    public String getDateInfo() {
        return dateInfo;
    }

    public void setDateInfo(String dateInfo) {
        this.dateInfo = dateInfo;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }
    
    
    

    
    

    
    
    
}
