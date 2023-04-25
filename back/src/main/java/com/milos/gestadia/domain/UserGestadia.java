package com.milos.gestadia.domain;

import java.io.Serializable;
import javax.validation.constraints.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

/**
 * A UserGestadia.
 */
@Table("user_gestadia")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class UserGestadia implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column("id")
    private Long id;

    @NotNull(message = "must not be null")
    @Size(min = 4, max = 8)
    @Column("password_hash")
    private String password_hash;

    @NotNull(message = "must not be null")
    @Size(min = 5, max = 20)
    @Column("email")
    private String email;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public UserGestadia id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword_hash() {
        return this.password_hash;
    }

    public UserGestadia password_hash(String password_hash) {
        this.setPassword_hash(password_hash);
        return this;
    }

    public void setPassword_hash(String password_hash) {
        this.password_hash = password_hash;
    }

    public String getEmail() {
        return this.email;
    }

    public UserGestadia email(String email) {
        this.setEmail(email);
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserGestadia)) {
            return false;
        }
        return id != null && id.equals(((UserGestadia) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "UserGestadia{" +
            "id=" + getId() +
            ", password_hash='" + getPassword_hash() + "'" +
            ", email='" + getEmail() + "'" +
            "}";
    }
}
