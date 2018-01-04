package com.develop.demo.ssm.services.impl;


import com.develop.demo.ssm.entities.User;
import com.develop.demo.ssm.services.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring.xml"})
public class UserServiceImplTest {

    @Autowired
    private UserService userService;

    @Test
    public void queryUser() throws Exception {
        User user = userService.queryUser("akun");

        System.out.println(user);
    }

}
