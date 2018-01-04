package com.develop.demo.ssm.utils;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;

public class MyBatisSqlSessionUtil {

    /**
     * 获取sqlSession连接
     *
     * @return SqlSession
     */
    public static SqlSession getSqlSession() {

        //使用类加载器加载mybatis的配置文件（它也加载关联的映射文件）
        InputStream is = null;
        try {
            is = Resources.getResourceAsStream("mybatis-config.xml");
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        //构建sqlSession的工厂
        SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(is);
        //创建能执行映射文件中sql的sqlSession
        return sessionFactory.openSession();
    }
}
