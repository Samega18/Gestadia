package com.milos.gestadia.repository.rowmapper;

import com.milos.gestadia.domain.UserGestadia;
import io.r2dbc.spi.Row;
import java.util.function.BiFunction;
import org.springframework.stereotype.Service;

/**
 * Converter between {@link Row} to {@link UserGestadia}, with proper type conversions.
 */
@Service
public class UserGestadiaRowMapper implements BiFunction<Row, String, UserGestadia> {

    private final ColumnConverter converter;

    public UserGestadiaRowMapper(ColumnConverter converter) {
        this.converter = converter;
    }

    /**
     * Take a {@link Row} and a column prefix, and extract all the fields.
     * @return the {@link UserGestadia} stored in the database.
     */
    @Override
    public UserGestadia apply(Row row, String prefix) {
        UserGestadia entity = new UserGestadia();
        entity.setId(converter.fromRow(row, prefix + "_id", Long.class));
        entity.setPassword_hash(converter.fromRow(row, prefix + "_password_hash", String.class));
        entity.setEmail(converter.fromRow(row, prefix + "_email", String.class));
        return entity;
    }
}
