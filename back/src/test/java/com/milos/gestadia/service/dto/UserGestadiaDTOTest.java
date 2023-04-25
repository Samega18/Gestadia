package com.milos.gestadia.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import com.milos.gestadia.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class UserGestadiaDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(UserGestadiaDTO.class);
        UserGestadiaDTO userGestadiaDTO1 = new UserGestadiaDTO();
        userGestadiaDTO1.setId(1L);
        UserGestadiaDTO userGestadiaDTO2 = new UserGestadiaDTO();
        assertThat(userGestadiaDTO1).isNotEqualTo(userGestadiaDTO2);
        userGestadiaDTO2.setId(userGestadiaDTO1.getId());
        assertThat(userGestadiaDTO1).isEqualTo(userGestadiaDTO2);
        userGestadiaDTO2.setId(2L);
        assertThat(userGestadiaDTO1).isNotEqualTo(userGestadiaDTO2);
        userGestadiaDTO1.setId(null);
        assertThat(userGestadiaDTO1).isNotEqualTo(userGestadiaDTO2);
    }
}
