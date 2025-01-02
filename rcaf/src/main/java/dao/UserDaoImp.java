package dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import models.User;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;




@Repository
@Transactional
public class UserDaoImp  implements UserDao{
     @PersistenceContext
      EntityManager entityManager;


     @Override
     public void createUser(User user) {
          String query = "INSERT INTO User (name, email, password, use)";
          entityManager.createQuery(query);
     }
}
