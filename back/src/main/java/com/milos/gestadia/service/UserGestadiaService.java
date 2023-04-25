package com.milos.gestadia.service;

import com.milos.gestadia.service.dto.UserGestadiaDTO;
import org.springframework.data.domain.Pageable;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Interface for managing {@link com.milos.gestadia.domain.UserGestadia}.
 */
public interface UserGestadiaService {
    /**
     * Save a userGestadia.
     *
     * @param userGestadiaDTO the entity to save.
     * @return the persisted entity.
     */
    Mono<UserGestadiaDTO> save(UserGestadiaDTO userGestadiaDTO);

    /**
     * Updates a userGestadia.
     *
     * @param userGestadiaDTO the entity to update.
     * @return the persisted entity.
     */
    Mono<UserGestadiaDTO> update(UserGestadiaDTO userGestadiaDTO);

    /**
     * Partially updates a userGestadia.
     *
     * @param userGestadiaDTO the entity to update partially.
     * @return the persisted entity.
     */
    Mono<UserGestadiaDTO> partialUpdate(UserGestadiaDTO userGestadiaDTO);

    /**
     * Get all the userGestadias.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Flux<UserGestadiaDTO> findAll(Pageable pageable);

    /**
     * Returns the number of userGestadias available.
     * @return the number of entities in the database.
     *
     */
    Mono<Long> countAll();

    /**
     * Get the "id" userGestadia.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Mono<UserGestadiaDTO> findOne(Long id);

    /**
     * Delete the "id" userGestadia.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    Mono<Void> delete(Long id);
}
