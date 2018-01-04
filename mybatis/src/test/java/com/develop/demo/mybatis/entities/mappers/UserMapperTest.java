package com.develop.demo.mybatis.entities.mappers;


import com.develop.demo.mybatis.entities.User;
import com.develop.demo.mybatis.utils.MyBatisSqlSessionUtil;
import org.apache.ibatis.session.SqlSession;
import org.junit.Test;

public class UserMapperTest {

    @Test
    public void findByUsername() throws Exception {
        SqlSession sqlSession = MyBatisSqlSessionUtil.getSqlSession();
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

        User user = userMapper.findByUsername("akun");

        sqlSession.close();

        System.out.println(user);
    }

}
