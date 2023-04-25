package com.milos.gestadia.service.mapper;

import com.milos.gestadia.domain.UserGestadia;
import com.milos.gestadia.service.dto.UserGestadiaDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link UserGestadia} and its DTO {@link UserGestadiaDTO}.
 */
@Mapper(componentModel = "spring")
public interface UserGestadiaMapper extends EntityMapper<UserGestadiaDTO, UserGestadia> {}
