package com.rcaf.rcaf.dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import com.rcaf.rcaf.models.User;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;




@Repository
@Transactional
public class UserDaoImp implements UserDao {
     @PersistenceContext
      EntityManager entityManager;


     @Override
     public void register(User user) {
          entityManager.merge(user);
     }

     @Override
     public void createUser(User user) {

     }
}
