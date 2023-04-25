package com.milos.gestadia.service.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link com.milos.gestadia.domain.UserGestadia} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class UserGestadiaDTO implements Serializable {

    private Long id;

    @NotNull(message = "must not be null")
    @Size(min = 4, max = 8)
    private String password_hash;

    @NotNull(message = "must not be null")
    @Size(min = 5, max = 20)
    private String email;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword_hash() {
        return password_hash;
    }

    public void setPassword_hash(String password_hash) {
        this.password_hash = password_hash;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserGestadiaDTO)) {
            return false;
        }

        UserGestadiaDTO userGestadiaDTO = (UserGestadiaDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, userGestadiaDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "UserGestadiaDTO{" +
            "id=" + getId() +
            ", password_hash='" + getPassword_hash() + "'" +
            ", email='" + getEmail() + "'" +
            "}";
    }
}
