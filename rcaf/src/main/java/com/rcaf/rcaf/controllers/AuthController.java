package com.rcaf.rcaf.controllers;

import com.rcaf.rcaf.dao.AuthDao;
import com.rcaf.rcaf.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.rcaf.rcaf.models.User;

import java.sql.Date;
import java.time.LocalDate;


@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthDao userDao; // user instance

    @Autowired
    private JWTUtil jwtUtil; //jwt instance

    /**
     * Mehtod to register a new user
     * @param user
     */
    @RequestMapping(value = "/register", method = RequestMethod.POST )
    public void register(@RequestBody User user){
        try {
            // argon instance
            Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
            //Local Date Instance
            LocalDate currentDate = LocalDate.now();
            //hashing user password
            String hash = argon2.hash(1,1024, 1, user.getPassword());
            // set user password
            user.setPassword(hash);
            //set user registration date
            user.setRegistration_date(Date.valueOf(currentDate));
            // register new user
            userDao.register(user);
        }catch (Exception e) {
            System.err.println("error when registering a user" + e.getMessage());
        }
    }

    /**
     * Method to verify login user credentials
     */
    @RequestMapping(value = "/login")
    public String login(@RequestBody User user){

        User loggedUser = userDao.login(user);// get user if login was successful

        if(loggedUser != null){// verify if user is different of null
            String token = jwtUtil.create(String.valueOf(loggedUser.getUser_id()), loggedUser.getEmail() ); // create jwt with user credentials
            return token;
        }

        return null;
    }

}
