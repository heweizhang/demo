package com.develop.demo.mybatis.entities.mappers;


import com.develop.demo.mybatis.entities.User;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {

    @Select("select * from `user` where username = #{username}")
    User findByUsername(String username);
}
