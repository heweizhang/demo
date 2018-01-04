package com.develop.demo.ssm.services;

import com.develop.demo.ssm.entities.User;

import java.util.Map;

public interface UserService {

    /**
     * 获取用户信息
     *
     * @return 用户信息
     */
    Map<String, Object> getUserInfo();

    /**
     * 查询用户信息
     *
     * @param username 用户名
     * @return User
     */
    User queryUser(String username);

}
