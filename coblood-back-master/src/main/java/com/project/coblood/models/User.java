/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.models;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private int userId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "activated")
    private String activated;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "phoneNumber")
    private int phoneNumber;

    @Column(name = "zipcCde")
    private int zipcCde;

    @Column(name = "bloodType")
    private String bloodType;

    @Column(name = "cardId")
    private int cardId;

    @Column(name = "dateOfLastDonation")
    private Date dateOfLastDonation;

    @JoinColumn(name = "fk_role_id", referencedColumnName = "roleType")
    @ManyToOne
    private Role role;

    @Column(name = "notificationChoice")
    private String notificationChoice;

    @Column(name = "deleted")
    private boolean deleted;

    @Column(name = "banned")
    private boolean banned;

    @Column(name = "regDate")
    private Date regDate;

    public User() {

    }

    public User(int userId, String username, String password, String firstname, String lastname, String email, String activated, int phoneNumber, int zipcCde, String bloodType, int cardId, Date dateOfLastDonation, Role role, String notificationChoice, Date regDate) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.activated = activated;
        this.phoneNumber = phoneNumber;
        this.zipcCde = zipcCde;
        this.bloodType = bloodType;
        this.cardId = cardId;
        this.dateOfLastDonation = dateOfLastDonation;
        this.role = role;
        this.notificationChoice = notificationChoice;
        this.regDate = regDate;
    }

    public User(String foo, String foo0, String ok, String foofoo) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getActivated() {
        return activated;
    }

    public void setActivated(String activated) {
        this.activated = activated;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getZipcCde() {
        return zipcCde;
    }

    public void setZipcCde(int zipcCde) {
        this.zipcCde = zipcCde;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public int getCardId() {
        return cardId;
    }

    public void setCardId(int cardId) {
        this.cardId = cardId;
    }

    public Date getDateOfLastDonation() {
        return dateOfLastDonation;
    }

    public void setDateOfLastDonation(Date dateOfLastDonation) {
        this.dateOfLastDonation = dateOfLastDonation;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getNotificationChoice() {
        return notificationChoice;
    }

    public void setNotificationChoice(String notificationChoice) {
        this.notificationChoice = notificationChoice;
    }

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

}
