package com.rcaf.rcaf.controllers;

import com.rcaf.rcaf.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.rcaf.rcaf.models.User;

@RestController
@RequestMapping("/")
public class AuthController {
    @Autowired
    private UserDao userDao;

    /**
     * Mehtod to register a new user
     * @param user
     */
    @RequestMapping(value = "/auth/register", method = RequestMethod.POST )
    public void register(@RequestBody User user){
        System.out.println("Endpoint auth/register alcanzado.");
        userDao.register(user);
    }

    /**
     * Method to verify login
     */
    @RequestMapping(value = "auth/login")
    public void login(){


    }

    @RequestMapping(value = "hi")
    @ResponseBody
    public String hi(){
        return "hi";
    }

}
