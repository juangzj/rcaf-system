package com.rcaf.rcaf.dao;

public interface RequestDao {

    boolean makeAnonymousRcaf(String type, String description, String uniqueCode);  // Method to create an rcaf
}
