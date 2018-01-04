package com.develop.demo.mvc2.controllers;

import com.develop.demo.mvc2.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/index")
    public ModelAndView index(ModelAndView modelAndView) {

        modelAndView.addObject("name", "akun");
        modelAndView.setViewName("user/index");

        System.out.println(userService.getUserInfo().get("name"));
        return modelAndView;
    }
}
