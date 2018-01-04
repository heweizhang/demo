package com.develop.demo.mybatis;


import com.develop.demo.mybatis.entities.User;
import com.develop.demo.mybatis.entities.mappers.UserMapper;
import com.develop.demo.mybatis.utils.MyBatisSqlSessionUtil;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.InputStream;


public class Tes {

    public static void main(String[] a) throws Exception {

        SqlSession sqlSession = MyBatisSqlSessionUtil.getSqlSession();
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

        User user = userMapper.findByUsername("akun");
        sqlSession.close();

        if (user != null) {
            System.out.println(user.getUsername() + ":" + user.getPassword());
        }
    }
}
