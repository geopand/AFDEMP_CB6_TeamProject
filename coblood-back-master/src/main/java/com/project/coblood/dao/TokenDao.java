/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.dao;

import com.project.coblood.models.User;

/**
 *
 * @author admin
 */
public interface TokenDao {

    String assignToken(User user);
    User validateToken(String token);

}
