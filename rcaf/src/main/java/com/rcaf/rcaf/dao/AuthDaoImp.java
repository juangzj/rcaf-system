package com.rcaf.rcaf.dao;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import com.rcaf.rcaf.models.User;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
@Transactional
public class AuthDaoImp implements AuthDao {
     @PersistenceContext
      EntityManager entityManager;

     // create new user query
     @Override
     public void register(User user) {
          entityManager.merge(user);
     }

     // verify user credentials
     @Override
     public User login(User user) {
          // query to find a user by email
          String query = "FROM User WHERE email = :email";
          // get user by email and save
          List<User> list = (List<User>) entityManager.createQuery(query)
                  .setParameter("email", user.getEmail())
                  .getResultList();

          //verify if the list is not the same at empty
          if(list.isEmpty()){
               return null;
          }

          String passwordHashed = list.get(0).getPassword(); // get user password from database

          //Verify user password with argon2
          Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);

          System.out.println("User logged");

          if (argon2.verify(passwordHashed, user.getPassword())){
               return list.get(0);
          }
          return null;


     }


}
