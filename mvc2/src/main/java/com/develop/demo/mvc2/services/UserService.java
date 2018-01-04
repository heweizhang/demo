package com.develop.demo.mvc2.services;


import java.util.Map;

/**
 * 用户服务
 */
public interface UserService {

    /**
     * 获取用户信息
     *
     * @return 用户信息
     */
    public Map<String, Object> getUserInfo();
}
