package com.develop.demo.ssm.services.impl;

import com.develop.demo.ssm.entities.User;
import com.develop.demo.ssm.entities.mappers.UserMapper;
import com.develop.demo.ssm.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Map<String, Object> getUserInfo() {
        Map<String, Object> person = new HashMap<String, Object>();

        person.put("name", "akun");
        person.put("age", 12);

        return person;
    }

    @Override
    public User queryUser(String username) {
        return userMapper.findOneByUsername(username);
    }


}
