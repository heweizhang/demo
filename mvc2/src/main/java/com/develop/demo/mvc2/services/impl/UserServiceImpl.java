package com.develop.demo.mvc2.services.impl;

import com.develop.demo.mvc2.services.UserService;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public Map<String, Object> getUserInfo() {
        Map<String, Object> p = new HashMap<String, Object>();

        p.put("name", "akun");
        p.put("age", 18);

        return null;
    }
}
