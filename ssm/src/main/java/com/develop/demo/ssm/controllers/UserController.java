package com.develop.demo.ssm.controllers;

import com.develop.demo.ssm.entities.User;
import com.develop.demo.ssm.entities.mappers.UserMapper;
import com.develop.demo.ssm.models.Result;
import com.develop.demo.ssm.services.UserService;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/index")
    @ResponseBody
    public String index() {
        System.out.println("index");
        return "index";
    }

    @GetMapping("/info")
    public ModelAndView info(ModelAndView modelAndView) {

        Map<String, Object> person = userService.getUserInfo();

        modelAndView.addObject("person", person);
        modelAndView.addObject("name", "asd");
        modelAndView.setViewName("user/info");

        return modelAndView;
    }

    @GetMapping("/json")
    @ResponseBody
    public Result success() {
        return Result.success(userService.getUserInfo());
    }

    @GetMapping("/query")
    @ResponseBody
    public Result query() throws IOException {
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        SqlSession session = sqlSessionFactory.openSession();
        User user = null;
        try {
            UserMapper mapper = session.getMapper(UserMapper.class);
            user = mapper.findOneByUsername("akun");
        } finally {
            session.close();
        }

        return Result.success(user);
    }

}
