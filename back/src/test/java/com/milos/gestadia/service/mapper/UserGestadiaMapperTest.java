package com.milos.gestadia.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UserGestadiaMapperTest {

    private UserGestadiaMapper userGestadiaMapper;

    @BeforeEach
    public void setUp() {
        userGestadiaMapper = new UserGestadiaMapperImpl();
    }
}
