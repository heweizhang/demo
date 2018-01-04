package com.develop.demo.ssm.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class Result implements Serializable {

    private static final long serialVersionUID = -1729125238186400596L;

    @JsonProperty("c")
    private Integer code = 0;

    @JsonProperty("m")
    private String message = "ok";

    @JsonProperty("d")
    private Object data = null;

    public Result() {

    }

    public Result(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Result(Integer code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public static Result success() {
        return new Result();
    }

    public static Result success(Object data) {
        return success(data, false);
    }

    public static Result success(Object data, Boolean returnString) {
        Result r = new Result();

        if (data instanceof String && !returnString) {
            r.setMessage(String.valueOf(data));
        } else {
            r.setData(data);
        }

        return r;
    }

    public static Result error(String message) {
        return error(-1, message);
    }

    public static Result error(Integer code, String message) {
        return new Result(code, message);
    }
}
