/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author admin
 */
@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE) // TODO FOR NOT_FOUND ETC
public class ExceptionHandler extends RuntimeException {

    private String resourceName;
    private String fieldName;
    private Object fieldValue;

    public ExceptionHandler(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s not acceptable with %s : '%s'", resourceName, fieldName, fieldValue));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }

    public String getResourceName() {
        return this.resourceName;
    }

    public String getFieldName() {
        return this.fieldName;
    }

    public Object getFieldValue() {
        return this.fieldValue;
    }
}
