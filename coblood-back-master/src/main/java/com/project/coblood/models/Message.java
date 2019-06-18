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
public class Message implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="messageId")
    private int messageId;
    
    @Column (name="senderId")
    private int senderId;
    
    @Column (name="receiverId")
    private int receiverId;
    
    @Column (name="messageData")
    private String messageData;
    
    @Column (name="dateInfo")
    private Date dateInfo;
    
    @Column (name="read")
    private int read;
    
    @Column (name="deleteBySender")
    private int deleteBySender;
    
    @Column (name="deleteByReceiver")
    private int deleteByReceiver;
    
    @Column (name="trashSender")
    private int trashSender;
    
    @Column (name="trashReceiver")
    private int trashReceiver;
    
    @Column (name="deleteByAdmin")
    private int deleteByAdmin;
    
    public Message(){
        
    }
    
    public Message(int sender, int receiver, String messageData){
        this.senderId = sender;
        this.receiverId = receiver;
        this.messageData = messageData;
        this.dateInfo = new Date();
    }

    public int getMessageId() {
        return messageId;
    }

    public void setMessageId(int messageId) {
        this.messageId = messageId;
    }

    public int getSenderId() {
        return senderId;
    }

    public void setSenderId(int senderId) {
        this.senderId = senderId;
    }

    public int getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(int receiverId) {
        this.receiverId = receiverId;
    }

    public String getMessageData() {
        return messageData;
    }

    public void setMessageData(String messageData) {
        this.messageData = messageData;
    }

    public Date getDateInfo() {
        return dateInfo;
    }

    public void setDateInfo(Date dateInfo) {
        this.dateInfo = dateInfo;
    }

    public int getRead() {
        return read;
    }

    public void setRead(int read) {
        this.read = read;
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

    public int getTrashSender() {
        return trashSender;
    }

    public void setTrashSender(int trashSender) {
        this.trashSender = trashSender;
    }

    public int getTrashReceiver() {
        return trashReceiver;
    }

    public void setTrashReceiver(int trashReceiver) {
        this.trashReceiver = trashReceiver;
    }

    public int getDeleteByAdmin() {
        return deleteByAdmin;
    }

    public void setDeleteByAdmin(int deleteByAdmin) {
        this.deleteByAdmin = deleteByAdmin;
    }

        
    
}
