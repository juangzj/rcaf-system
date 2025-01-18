package com.rcaf.rcaf.dao;

import com.rcaf.rcaf.models.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
@Repository
public class UserDaoImp implements UserDao {

    @PersistenceContext
    EntityManager entityManager; // To make queries

    /**
     * Mehtod to get all users
     * @return
     */
    @Override
    public List<User> getAllUsers() {
        String query = "From User";
        return entityManager.createQuery(query).getResultList();
    }

    /**
     * Method to delete an user by id
     * @param user_id
     * @return
     */
    @Override
    public boolean deleteUser(int user_id) {
        try {
            User user = entityManager.find(User.class, user_id);
            entityManager.remove(user);
            return true;
        }catch(Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}
