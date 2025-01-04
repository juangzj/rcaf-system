package com.rcaf.rcaf.controllers;

import com.rcaf.rcaf.dao.UserDao;
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
    @ResponseBody
    public void register(@RequestBody User user){
        try {
            userDao.register(user);
        }catch (Exception e) {
            System.err.println("error when registering a user" + e.getMessage());
        }
    }

    /**
     * Method to verify login
     */
    @RequestMapping(value = "/login")
    @ResponseBody
    public void login(){


    }

    @RequestMapping(value = "hi")
    @ResponseBody
    public String hi(){
        return "hi";
    }

}
