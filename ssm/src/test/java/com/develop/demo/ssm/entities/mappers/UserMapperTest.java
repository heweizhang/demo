package com.develop.demo.ssm.entities.mappers;


import com.develop.demo.ssm.entities.User;
import com.develop.demo.ssm.utils.MyBatisSqlSessionUtil;
import org.apache.ibatis.session.SqlSession;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring.xml"})
public class UserMapperTest {

    private SqlSession sqlSession;
    private UserMapper userMapper;

    @Before
    public void before() throws Exception {
        sqlSession = MyBatisSqlSessionUtil.getSqlSession();
        assert sqlSession != null;

        userMapper = sqlSession.getMapper(UserMapper.class);
    }

    @After
    public void after() throws Exception {
        sqlSession.close();
    }

    @Test
    public void findOneByUsername() throws Exception {
        User user = userMapper.findOneByUsername("akun");
        System.out.println(user);
    }

}
