package com.rcaf.rcaf.controllers;

import com.rcaf.rcaf.dao.UserDao;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.rcaf.rcaf.models.User;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserDao userDao;

    /**
     * Mehtod to register a new user
     * @param user
     */
    @RequestMapping(value = "/register", method = RequestMethod.POST )

    public void register(@RequestBody User user){
        try {
            // argon instance
            Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
            //hashing user password
            String hash = argon2.hash(1,1024, 1, user.getPassword());
            // set user password
            user.setPassword(hash);
            // register new user
            userDao.register(user);
        }catch (Exception e) {
            System.err.println("error when registering a user" + e.getMessage());
        }
    }

    /**
     * Method to verify login
     */
    @RequestMapping(value = "/login")
    public void login(User user){
        userDao.login(user);
    }

}
