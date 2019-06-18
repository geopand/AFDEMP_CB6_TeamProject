/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.models;

/**
 *
 * @author admin
 */
public class Role {

    int roleInt;
    String roleType;

    public Role(int roleInt) {
        if (roleInt == 1) {
            this.roleInt = roleInt;
            this.roleType = "Admin";
        }
        if (roleInt == 3) {
            this.roleInt = roleInt;
            this.roleType = "User";
        }
    }

    public int getRoleInt() {
        return roleInt;
    }

    public void setRoleInt(int roleInt) {
        this.roleInt = roleInt;
    }

    public String getRoleType() {
        return roleType;
    }

    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }

}
