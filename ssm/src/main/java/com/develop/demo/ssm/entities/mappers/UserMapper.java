package com.develop.demo.ssm.entities.mappers;

import com.develop.demo.ssm.entities.User;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {

    @Select("select * from user where username = #{username}")
    User findOneByUsername(@Param("username") String username);
}
