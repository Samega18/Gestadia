package com.milos.gestadia.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.milos.gestadia.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class UserGestadiaTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(UserGestadia.class);
        UserGestadia userGestadia1 = new UserGestadia();
        userGestadia1.setId(1L);
        UserGestadia userGestadia2 = new UserGestadia();
        userGestadia2.setId(userGestadia1.getId());
        assertThat(userGestadia1).isEqualTo(userGestadia2);
        userGestadia2.setId(2L);
        assertThat(userGestadia1).isNotEqualTo(userGestadia2);
        userGestadia1.setId(null);
        assertThat(userGestadia1).isNotEqualTo(userGestadia2);
    }
}
