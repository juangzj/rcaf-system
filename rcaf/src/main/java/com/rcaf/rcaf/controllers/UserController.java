package com.rcaf.rcaf.controllers;

import com.rcaf.rcaf.dao.UserDao;
import com.rcaf.rcaf.models.User;
import com.rcaf.rcaf.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/users")
@RestController
public class UserController {

    @Autowired
    private UserDao userDao; // userDao instance to get its methods
    @Autowired
    private JWTUtil jwtUtil; // JWTUtil instance

    /**
     * Method to get all users
     * @param token
     * @return
     */
    @RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
    public List<User> getAllUsers(@RequestHeader(value = "Authorization") String token) {
        //System.out.println("EL TOKEN ES: " + token);
        String userId = jwtUtil.getKey(token.replaceAll("\\s+", ""));


        if (userId == null) {
            //return new ArrayList<>();
        }
        return userDao.getAllUsers();
    }

    /**
     * Method to delete a user by id
     * @param token
     * @param id
     * @return
     */
    @RequestMapping(value = "/deleteUser/{id}", method = RequestMethod.DELETE)
    public String deleteUser(@RequestHeader(value = "Authorization") String token,@PathVariable("id") int id){
        String userId = jwtUtil.getKey((token));

        boolean userDeleted = userDao.deleteUser(id);

        if(userDeleted){
            return "deleted";
        }else{
            return "fail";
        }
    }

}
