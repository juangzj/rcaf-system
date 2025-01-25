package com.rcaf.rcaf.dao;

import com.rcaf.rcaf.models.Requests;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.time.LocalDate;

@Transactional(propagation = Propagation.REQUIRED)
@Repository
public class RequestDaoImp implements RequestDao {

    @PersistenceContext
    private EntityManager entityManager; // To make queries

    /**
     * Method to create an anonymous RCAF
     * @param type - The type of the request (Request, Complaint, Claim, Suggestion)
     * @param description - A detailed description of the request
     * @return True if the RCAF was successfully created , false otherwise
     */
    @Override
    public boolean makeAnonymousRcaf(String type, String description, String uniqueCode) {
        try {
            // Create a new Request (RCAF) entity
            Requests request = new Requests();

            // Local date instance
            LocalDate currentDate = LocalDate.now();

            // Set attributes for the new request
            request.setType(type); // Set the type
            request.setDescription(description); // Set the description
            request.setAnonymous(true); // Mask as anonymous
            request.setStatus("Open"); // Default status
            request.setCreatedAt(Date.valueOf(currentDate)); // Set the current date
            request.setUniqueCode(uniqueCode); // Set uniqueCode

            // Persist the request (RCAF) to the database
            entityManager.persist(request);

            return true; // Return true if successful

        } catch (Exception e) {
            // Handle the exception and log the error
            e.printStackTrace();
            System.out.println("algo malio sal " + e.getMessage());
            return false; // Return false if something went wrong
        }
    }
}
