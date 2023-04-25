package com.milos.gestadia.repository;

import com.milos.gestadia.domain.UserGestadia;
import org.springframework.data.domain.Pageable;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.relational.core.query.Criteria;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Spring Data R2DBC repository for the UserGestadia entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UserGestadiaRepository extends ReactiveCrudRepository<UserGestadia, Long>, UserGestadiaRepositoryInternal {
    Flux<UserGestadia> findAllBy(Pageable pageable);

    @Override
    <S extends UserGestadia> Mono<S> save(S entity);

    @Override
    Flux<UserGestadia> findAll();

    @Override
    Mono<UserGestadia> findById(Long id);

    @Override
    Mono<Void> deleteById(Long id);
}

interface UserGestadiaRepositoryInternal {
    <S extends UserGestadia> Mono<S> save(S entity);

    Flux<UserGestadia> findAllBy(Pageable pageable);

    Flux<UserGestadia> findAll();

    Mono<UserGestadia> findById(Long id);
    // this is not supported at the moment because of https://github.com/jhipster/generator-jhipster/issues/18269
    // Flux<UserGestadia> findAllBy(Pageable pageable, Criteria criteria);

}
