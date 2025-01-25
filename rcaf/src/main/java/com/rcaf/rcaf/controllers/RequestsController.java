package com.rcaf.rcaf.controllers;

import com.rcaf.rcaf.dao.RequestDao;
import com.rcaf.rcaf.utils.UniqueCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rcaf")
public class RequestsController {
    @Autowired
    private RequestDao requestDao; // requestDao instance get its methods

    @Autowired
    private UniqueCodeService uniqueCode; // Instance to get unique code method

    /**
     * Endpoint to create an anonymous RCAF.
     */
    @PostMapping("/createAnonymousRcaf")
    public ResponseEntity<Map<String, Object>> makeAnRcaf(
            @RequestBody Map<String, String> requestBody) {

        // Get parameters from request body
        String type = requestBody.get("type");
        String description = requestBody.get("description");

        // Create unique code
        String code = uniqueCode.generateUniqueCode();

        // Create the RCAF
        boolean rcafCreated = requestDao.makeAnonymousRcaf(type, description, code);

        // Prepare response
        Map<String, Object> response = new HashMap<>();
        if (rcafCreated) {
            response.put("message", "RCAF created successfully.");
            response.put("uniqueCode", code);
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Failed to create RCAF.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }


}
