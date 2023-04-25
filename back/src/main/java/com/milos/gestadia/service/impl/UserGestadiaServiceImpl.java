package com.milos.gestadia.service.impl;

import com.milos.gestadia.domain.UserGestadia;
import com.milos.gestadia.repository.UserGestadiaRepository;
import com.milos.gestadia.service.UserGestadiaService;
import com.milos.gestadia.service.dto.UserGestadiaDTO;
import com.milos.gestadia.service.mapper.UserGestadiaMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Implementation for managing {@link UserGestadia}.
 */
@Service
@Transactional
public class UserGestadiaServiceImpl implements UserGestadiaService {

    private final Logger log = LoggerFactory.getLogger(UserGestadiaServiceImpl.class);

    private final UserGestadiaRepository userGestadiaRepository;

    private final UserGestadiaMapper userGestadiaMapper;

    public UserGestadiaServiceImpl(UserGestadiaRepository userGestadiaRepository, UserGestadiaMapper userGestadiaMapper) {
        this.userGestadiaRepository = userGestadiaRepository;
        this.userGestadiaMapper = userGestadiaMapper;
    }

    @Override
    public Mono<UserGestadiaDTO> save(UserGestadiaDTO userGestadiaDTO) {
        log.debug("Request to save UserGestadia : {}", userGestadiaDTO);
        return userGestadiaRepository.save(userGestadiaMapper.toEntity(userGestadiaDTO)).map(userGestadiaMapper::toDto);
    }

    @Override
    public Mono<UserGestadiaDTO> update(UserGestadiaDTO userGestadiaDTO) {
        log.debug("Request to update UserGestadia : {}", userGestadiaDTO);
        return userGestadiaRepository.save(userGestadiaMapper.toEntity(userGestadiaDTO)).map(userGestadiaMapper::toDto);
    }

    @Override
    public Mono<UserGestadiaDTO> partialUpdate(UserGestadiaDTO userGestadiaDTO) {
        log.debug("Request to partially update UserGestadia : {}", userGestadiaDTO);

        return userGestadiaRepository
            .findById(userGestadiaDTO.getId())
            .map(existingUserGestadia -> {
                userGestadiaMapper.partialUpdate(existingUserGestadia, userGestadiaDTO);

                return existingUserGestadia;
            })
            .flatMap(userGestadiaRepository::save)
            .map(userGestadiaMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Flux<UserGestadiaDTO> findAll(Pageable pageable) {
        log.debug("Request to get all UserGestadias");
        return userGestadiaRepository.findAllBy(pageable).map(userGestadiaMapper::toDto);
    }

    public Mono<Long> countAll() {
        return userGestadiaRepository.count();
    }

    @Override
    @Transactional(readOnly = true)
    public Mono<UserGestadiaDTO> findOne(Long id) {
        log.debug("Request to get UserGestadia : {}", id);
        return userGestadiaRepository.findById(id).map(userGestadiaMapper::toDto);
    }

    @Override
    public Mono<Void> delete(Long id) {
        log.debug("Request to delete UserGestadia : {}", id);
        return userGestadiaRepository.deleteById(id);
    }
}
