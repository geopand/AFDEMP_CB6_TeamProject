package com.project.coblood.security;

public class SaltController {

    public String encrypt(String myPassword, String salt) {

        String mySecurePassword = Salt.generateSecurePassword(myPassword, salt);
        return mySecurePassword;
    }

    public boolean decrypt(String providedPassword, String securePassword, String salt) {
        boolean passwordMatch = Salt.verifyUserPassword(providedPassword, securePassword, salt);
        return passwordMatch;

    }

}
