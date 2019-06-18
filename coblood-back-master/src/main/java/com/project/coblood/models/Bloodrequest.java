/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.models;

import java.io.Serializable;
import java.sql.Date;

/**
 *
 * @author admin
 */
public class Bloodrequest implements Serializable {

  private int requestId;
  private String pFirstName;
  private String pLastName;
  private String pFatherName;
  private String contactEmail;
  private int contactPhone;
  private String bloodType;
  private int needQuantity;
  private String hName;
  private int hZipCode;
  private int compatibleNeed;
  private boolean isCompatibleWith;
  private Date DOSRequest;
  private Date DOCRequest;
  private int ownerId;
  private String needType;
  private String status;
  private String note;

    public Bloodrequest() {
    }

    public Bloodrequest(int requestId, String pFirstName, String pLastName, String pFatherName, String contactEmail, int contactPhone, String bloodType, int needQuantity, String hName, int hZipCode, int compatibleNeed, boolean isCompatibleWith, Date DOSRequest, Date DOCRequest, int ownerId, String needType, String status, String note) {
        this.requestId = requestId;
        this.pFirstName = pFirstName;
        this.pLastName = pLastName;
        this.pFatherName = pFatherName;
        this.contactEmail = contactEmail;
        this.contactPhone = contactPhone;
        this.bloodType = bloodType;
        this.needQuantity = needQuantity;
        this.hName = hName;
        this.hZipCode = hZipCode;
        this.compatibleNeed = compatibleNeed;
        this.isCompatibleWith = isCompatibleWith;
        this.DOSRequest = DOSRequest;
        this.DOCRequest = DOCRequest;
        this.ownerId = ownerId;
        this.needType = needType;
        this.status = status;
        this.note = note;
    }

    

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getNeedQuantity() {
        return needQuantity;
    }

    public void setNeedQuantity(int needQuantity) {
        this.needQuantity = needQuantity;
    }

    public String getNeedType() {
        return needType;
    }

    public void setNeedType(String needType) {
        this.needType = needType;
    }
  

    public int getRequestId() {
        return requestId;
    }

    public void setRequestId(int requestId) {
        this.requestId = requestId;
    }
    
    public String getpFirstName() {
        return pFirstName;
    }

    public void setpFirstName(String pFirstName) {
        this.pFirstName = pFirstName;
    }

    public String getpLastName() {
        return pLastName;
    }

    public void setpLastName(String pLastName) {
        this.pLastName = pLastName;
    }

    public String getpFatherName() {
        return pFatherName;
    }

    public void setpFatherName(String pFatherName) {
        this.pFatherName = pFatherName;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String pEmail) {
        this.contactEmail = pEmail;
    }

    public int getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(int pPhone) {
        this.contactPhone = pPhone;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String gethName() {
        return hName;
    }

    public void sethName(String hName) {
        this.hName = hName;
    }

    public int gethZipCode() {
        return hZipCode;
    }

    public void sethZipCode(int hZipCode) {
        this.hZipCode = hZipCode;
    }

    public int getCompatibleNeed() {
        return compatibleNeed;
    }

    public void setCompatibleNeed(int compatibleNeed) {
        this.compatibleNeed = compatibleNeed;
    }

    public boolean isIsCompatibleWith() {
        return isCompatibleWith;
    }

    public void setIsCompatibleWith(boolean isCompatibleWith) {
        this.isCompatibleWith = isCompatibleWith;
    }

    public Date getDOSRequest() {
        return DOSRequest;
    }

    public void setDOSRequest(Date DOSRequest) {
        this.DOSRequest = DOSRequest;
    }

    public Date getDOCRequest() {
        return DOCRequest;
    }

    public void setDOCRequest(Date DOCRequest) {
        this.DOCRequest = DOCRequest;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
