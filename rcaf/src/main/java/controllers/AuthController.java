package controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @RequestMapping(value = "auth/register")
    public void register(){


    }
    @RequestMapping(value = "auth/login")
    public void login(){


    }

}
