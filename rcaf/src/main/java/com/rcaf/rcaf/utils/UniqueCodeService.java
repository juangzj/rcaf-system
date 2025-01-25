package com.rcaf.rcaf.utils;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Service
public class UniqueCodeService {

    /**
     * Method to generate unique  code
     * @return
     */
    public String generateUniqueCode(){
        //Get the current date and time
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
        String formattedDate = now.format(dateFormatter);

        //Generate a unique UUID
        String uuid = UUID.randomUUID().toString().substring(0,8);

        //combine date and UUID
        return formattedDate + "" + uuid;

    }

}


