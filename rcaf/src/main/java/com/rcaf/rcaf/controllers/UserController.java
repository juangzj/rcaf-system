package com.rcaf.rcaf.controllers;

import com.rcaf.rcaf.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserDao userDao;

    public void createUser(){}

}
