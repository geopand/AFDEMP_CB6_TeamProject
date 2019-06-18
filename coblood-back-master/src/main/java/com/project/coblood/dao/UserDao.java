/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.dao;

import com.project.coblood.models.Login;
import com.project.coblood.models.Register;
import com.project.coblood.models.User;
import com.project.coblood.models.UserApi;
import java.util.ArrayList;

/**
 *
 * @author admin
 */
public interface UserDao {
    
    //***User
    int registerUser(Register user);
    User validateUser(Login login);
   
    //***Admin
    int getUserIdByUsername(String username);
    User getUserByEmail(String email);
    User getUserByUsername(String username);
    ArrayList<User> getAllUsers();
    int createUser(String username, String password);
    int deleteUser(int userId); 
    int assignRole(int userId, int roleId);
    
    UserApi responseUser(User user);
    int authorizedUser(String token);
   
}
