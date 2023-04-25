package com.milos.gestadia.web.rest;

import com.milos.gestadia.repository.UserGestadiaRepository;
import com.milos.gestadia.service.UserGestadiaService;
import com.milos.gestadia.service.dto.UserGestadiaDTO;
import com.milos.gestadia.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.reactive.ResponseUtil;

/**
 * REST controller for managing {@link com.milos.gestadia.domain.UserGestadia}.
 */
@RestController
@RequestMapping("/api")
public class UserGestadiaResource {

    private final Logger log = LoggerFactory.getLogger(UserGestadiaResource.class);

    private static final String ENTITY_NAME = "userGestadia";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final UserGestadiaService userGestadiaService;

    private final UserGestadiaRepository userGestadiaRepository;

    public UserGestadiaResource(UserGestadiaService userGestadiaService, UserGestadiaRepository userGestadiaRepository) {
        this.userGestadiaService = userGestadiaService;
        this.userGestadiaRepository = userGestadiaRepository;
    }

    /**
     * {@code POST  /user-gestadias} : Create a new userGestadia.
     *
     * @param userGestadiaDTO the userGestadiaDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new userGestadiaDTO, or with status {@code 400 (Bad Request)} if the userGestadia has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/user-gestadias")
    public Mono<ResponseEntity<UserGestadiaDTO>> createUserGestadia(@Valid @RequestBody UserGestadiaDTO userGestadiaDTO)
        throws URISyntaxException {
        log.debug("REST request to save UserGestadia : {}", userGestadiaDTO);
        if (userGestadiaDTO.getId() != null) {
            throw new BadRequestAlertException("A new userGestadia cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return userGestadiaService
            .save(userGestadiaDTO)
            .map(result -> {
                try {
                    return ResponseEntity
                        .created(new URI("/api/user-gestadias/" + result.getId()))
                        .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
                        .body(result);
                } catch (URISyntaxException e) {
                    throw new RuntimeException(e);
                }
            });
    }

    /**
     * {@code PUT  /user-gestadias/:id} : Updates an existing userGestadia.
     *
     * @param id the id of the userGestadiaDTO to save.
     * @param userGestadiaDTO the userGestadiaDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated userGestadiaDTO,
     * or with status {@code 400 (Bad Request)} if the userGestadiaDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the userGestadiaDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/user-gestadias/{id}")
    public Mono<ResponseEntity<UserGestadiaDTO>> updateUserGestadia(
        @PathVariable(value = "id", required = false) final Long id,
        @Valid @RequestBody UserGestadiaDTO userGestadiaDTO
    ) throws URISyntaxException {
        log.debug("REST request to update UserGestadia : {}, {}", id, userGestadiaDTO);
        if (userGestadiaDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, userGestadiaDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return userGestadiaRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                return userGestadiaService
                    .update(userGestadiaDTO)
                    .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)))
                    .map(result ->
                        ResponseEntity
                            .ok()
                            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
                            .body(result)
                    );
            });
    }

    /**
     * {@code PATCH  /user-gestadias/:id} : Partial updates given fields of an existing userGestadia, field will ignore if it is null
     *
     * @param id the id of the userGestadiaDTO to save.
     * @param userGestadiaDTO the userGestadiaDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated userGestadiaDTO,
     * or with status {@code 400 (Bad Request)} if the userGestadiaDTO is not valid,
     * or with status {@code 404 (Not Found)} if the userGestadiaDTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the userGestadiaDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/user-gestadias/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public Mono<ResponseEntity<UserGestadiaDTO>> partialUpdateUserGestadia(
        @PathVariable(value = "id", required = false) final Long id,
        @NotNull @RequestBody UserGestadiaDTO userGestadiaDTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update UserGestadia partially : {}, {}", id, userGestadiaDTO);
        if (userGestadiaDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, userGestadiaDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return userGestadiaRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                Mono<UserGestadiaDTO> result = userGestadiaService.partialUpdate(userGestadiaDTO);

                return result
                    .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)))
                    .map(res ->
                        ResponseEntity
                            .ok()
                            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, res.getId().toString()))
                            .body(res)
                    );
            });
    }

    /**
     * {@code GET  /user-gestadias} : get all the userGestadias.
     *
     * @param pageable the pagination information.
     * @param request a {@link ServerHttpRequest} request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of userGestadias in body.
     */
    @GetMapping("/user-gestadias")
    public Mono<ResponseEntity<List<UserGestadiaDTO>>> getAllUserGestadias(
        @org.springdoc.api.annotations.ParameterObject Pageable pageable,
        ServerHttpRequest request
    ) {
        log.debug("REST request to get a page of UserGestadias");
        return userGestadiaService
            .countAll()
            .zipWith(userGestadiaService.findAll(pageable).collectList())
            .map(countWithEntities ->
                ResponseEntity
                    .ok()
                    .headers(
                        PaginationUtil.generatePaginationHttpHeaders(
                            UriComponentsBuilder.fromHttpRequest(request),
                            new PageImpl<>(countWithEntities.getT2(), pageable, countWithEntities.getT1())
                        )
                    )
                    .body(countWithEntities.getT2())
            );
    }

    /**
     * {@code GET  /user-gestadias/:id} : get the "id" userGestadia.
     *
     * @param id the id of the userGestadiaDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the userGestadiaDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/user-gestadias/{id}")
    public Mono<ResponseEntity<UserGestadiaDTO>> getUserGestadia(@PathVariable Long id) {
        log.debug("REST request to get UserGestadia : {}", id);
        Mono<UserGestadiaDTO> userGestadiaDTO = userGestadiaService.findOne(id);
        return ResponseUtil.wrapOrNotFound(userGestadiaDTO);
    }

    /**
     * {@code DELETE  /user-gestadias/:id} : delete the "id" userGestadia.
     *
     * @param id the id of the userGestadiaDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/user-gestadias/{id}")
    public Mono<ResponseEntity<Void>> deleteUserGestadia(@PathVariable Long id) {
        log.debug("REST request to delete UserGestadia : {}", id);
        return userGestadiaService
            .delete(id)
            .then(
                Mono.just(
                    ResponseEntity
                        .noContent()
                        .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
                        .build()
                )
            );
    }
}
