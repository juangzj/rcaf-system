package com.rcaf.rcaf.dao;

import com.rcaf.rcaf.models.User;

public interface UserDao {

    void register(User user);// method to register a new user

    User login (User user);// method to verify user credentials
}
