package com.rcaf.rcaf.dao;

import com.rcaf.rcaf.models.User;

import java.util.List;

public interface UserDao {

    List<User> getAllUsers();// method to get all users

    boolean deleteUser(int user_id); // method to delete a user
}
