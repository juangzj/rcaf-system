package com.rcaf.rcaf.dao;

import com.rcaf.rcaf.models.Requests;

import java.util.List;

public interface RequestDao {

    boolean makeAnonymousRcaf(String type, String description, String uniqueCode);  // Method to create a rcaf

    List<Requests> getRcafsByUserId(int user_id); // Method to get all Users Rcafs
}
