package com.milos.gestadia.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import com.milos.gestadia.IntegrationTest;
import com.milos.gestadia.domain.UserGestadia;
import com.milos.gestadia.repository.EntityManager;
import com.milos.gestadia.repository.UserGestadiaRepository;
import com.milos.gestadia.service.dto.UserGestadiaDTO;
import com.milos.gestadia.service.mapper.UserGestadiaMapper;
import java.time.Duration;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.reactive.server.WebTestClient;

/**
 * Integration tests for the {@link UserGestadiaResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient(timeout = IntegrationTest.DEFAULT_ENTITY_TIMEOUT)
@WithMockUser
class UserGestadiaResourceIT {

    private static final String DEFAULT_PASSWORD_HASH = "AAAAAAAA";
    private static final String UPDATED_PASSWORD_HASH = "BBBBBBBB";

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/user-gestadias";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private UserGestadiaRepository userGestadiaRepository;

    @Autowired
    private UserGestadiaMapper userGestadiaMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private WebTestClient webTestClient;

    private UserGestadia userGestadia;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static UserGestadia createEntity(EntityManager em) {
        UserGestadia userGestadia = new UserGestadia().password_hash(DEFAULT_PASSWORD_HASH).email(DEFAULT_EMAIL);
        return userGestadia;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static UserGestadia createUpdatedEntity(EntityManager em) {
        UserGestadia userGestadia = new UserGestadia().password_hash(UPDATED_PASSWORD_HASH).email(UPDATED_EMAIL);
        return userGestadia;
    }

    public static void deleteEntities(EntityManager em) {
        try {
            em.deleteAll(UserGestadia.class).block();
        } catch (Exception e) {
            // It can fail, if other entities are still referring this - it will be removed later.
        }
    }

    @AfterEach
    public void cleanup() {
        deleteEntities(em);
    }

    @BeforeEach
    public void initTest() {
        deleteEntities(em);
        userGestadia = createEntity(em);
    }

    @Test
    void createUserGestadia() throws Exception {
        int databaseSizeBeforeCreate = userGestadiaRepository.findAll().collectList().block().size();
        // Create the UserGestadia
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(userGestadia);
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeCreate + 1);
        UserGestadia testUserGestadia = userGestadiaList.get(userGestadiaList.size() - 1);
        assertThat(testUserGestadia.getPassword_hash()).isEqualTo(DEFAULT_PASSWORD_HASH);
        assertThat(testUserGestadia.getEmail()).isEqualTo(DEFAULT_EMAIL);
    }

    @Test
    void createUserGestadiaWithExistingId() throws Exception {
        // Create the UserGestadia with an existing ID
        userGestadia.setId(1L);
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(userGestadia);

        int databaseSizeBeforeCreate = userGestadiaRepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void checkPassword_hashIsRequired() throws Exception {
        int databaseSizeBeforeTest = userGestadiaRepository.findAll().collectList().block().size();
        // set the field null
        userGestadia.setPassword_hash(null);

        // Create the UserGestadia, which fails.
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(userGestadia);

        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    void checkEmailIsRequired() throws Exception {
        int databaseSizeBeforeTest = userGestadiaRepository.findAll().collectList().block().size();
        // set the field null
        userGestadia.setEmail(null);

        // Create the UserGestadia, which fails.
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(userGestadia);

        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    void getAllUserGestadias() {
        // Initialize the database
        userGestadiaRepository.save(userGestadia).block();

        // Get all the userGestadiaList
        webTestClient
            .get()
            .uri(ENTITY_API_URL + "?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(userGestadia.getId().intValue()))
            .jsonPath("$.[*].password_hash")
            .value(hasItem(DEFAULT_PASSWORD_HASH))
            .jsonPath("$.[*].email")
            .value(hasItem(DEFAULT_EMAIL));
    }

    @Test
    void getUserGestadia() {
        // Initialize the database
        userGestadiaRepository.save(userGestadia).block();

        // Get the userGestadia
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, userGestadia.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(userGestadia.getId().intValue()))
            .jsonPath("$.password_hash")
            .value(is(DEFAULT_PASSWORD_HASH))
            .jsonPath("$.email")
            .value(is(DEFAULT_EMAIL));
    }

    @Test
    void getNonExistingUserGestadia() {
        // Get the userGestadia
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void putExistingUserGestadia() throws Exception {
        // Initialize the database
        userGestadiaRepository.save(userGestadia).block();

        int databaseSizeBeforeUpdate = userGestadiaRepository.findAll().collectList().block().size();

        // Update the userGestadia
        UserGestadia updatedUserGestadia = userGestadiaRepository.findById(userGestadia.getId()).block();
        updatedUserGestadia.password_hash(UPDATED_PASSWORD_HASH).email(UPDATED_EMAIL);
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(updatedUserGestadia);

        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, userGestadiaDTO.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeUpdate);
        UserGestadia testUserGestadia = userGestadiaList.get(userGestadiaList.size() - 1);
        assertThat(testUserGestadia.getPassword_hash()).isEqualTo(UPDATED_PASSWORD_HASH);
        assertThat(testUserGestadia.getEmail()).isEqualTo(UPDATED_EMAIL);
    }

    @Test
    void putNonExistingUserGestadia() throws Exception {
        int databaseSizeBeforeUpdate = userGestadiaRepository.findAll().collectList().block().size();
        userGestadia.setId(count.incrementAndGet());

        // Create the UserGestadia
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(userGestadia);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, userGestadiaDTO.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchUserGestadia() throws Exception {
        int databaseSizeBeforeUpdate = userGestadiaRepository.findAll().collectList().block().size();
        userGestadia.setId(count.incrementAndGet());

        // Create the UserGestadia
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(userGestadia);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamUserGestadia() throws Exception {
        int databaseSizeBeforeUpdate = userGestadiaRepository.findAll().collectList().block().size();
        userGestadia.setId(count.incrementAndGet());

        // Create the UserGestadia
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(userGestadia);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateUserGestadiaWithPatch() throws Exception {
        // Initialize the database
        userGestadiaRepository.save(userGestadia).block();

        int databaseSizeBeforeUpdate = userGestadiaRepository.findAll().collectList().block().size();

        // Update the userGestadia using partial update
        UserGestadia partialUpdatedUserGestadia = new UserGestadia();
        partialUpdatedUserGestadia.setId(userGestadia.getId());

        partialUpdatedUserGestadia.email(UPDATED_EMAIL);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedUserGestadia.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedUserGestadia))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeUpdate);
        UserGestadia testUserGestadia = userGestadiaList.get(userGestadiaList.size() - 1);
        assertThat(testUserGestadia.getPassword_hash()).isEqualTo(DEFAULT_PASSWORD_HASH);
        assertThat(testUserGestadia.getEmail()).isEqualTo(UPDATED_EMAIL);
    }

    @Test
    void fullUpdateUserGestadiaWithPatch() throws Exception {
        // Initialize the database
        userGestadiaRepository.save(userGestadia).block();

        int databaseSizeBeforeUpdate = userGestadiaRepository.findAll().collectList().block().size();

        // Update the userGestadia using partial update
        UserGestadia partialUpdatedUserGestadia = new UserGestadia();
        partialUpdatedUserGestadia.setId(userGestadia.getId());

        partialUpdatedUserGestadia.password_hash(UPDATED_PASSWORD_HASH).email(UPDATED_EMAIL);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedUserGestadia.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedUserGestadia))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeUpdate);
        UserGestadia testUserGestadia = userGestadiaList.get(userGestadiaList.size() - 1);
        assertThat(testUserGestadia.getPassword_hash()).isEqualTo(UPDATED_PASSWORD_HASH);
        assertThat(testUserGestadia.getEmail()).isEqualTo(UPDATED_EMAIL);
    }

    @Test
    void patchNonExistingUserGestadia() throws Exception {
        int databaseSizeBeforeUpdate = userGestadiaRepository.findAll().collectList().block().size();
        userGestadia.setId(count.incrementAndGet());

        // Create the UserGestadia
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(userGestadia);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, userGestadiaDTO.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchUserGestadia() throws Exception {
        int databaseSizeBeforeUpdate = userGestadiaRepository.findAll().collectList().block().size();
        userGestadia.setId(count.incrementAndGet());

        // Create the UserGestadia
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(userGestadia);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamUserGestadia() throws Exception {
        int databaseSizeBeforeUpdate = userGestadiaRepository.findAll().collectList().block().size();
        userGestadia.setId(count.incrementAndGet());

        // Create the UserGestadia
        UserGestadiaDTO userGestadiaDTO = userGestadiaMapper.toDto(userGestadia);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(userGestadiaDTO))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the UserGestadia in the database
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteUserGestadia() {
        // Initialize the database
        userGestadiaRepository.save(userGestadia).block();

        int databaseSizeBeforeDelete = userGestadiaRepository.findAll().collectList().block().size();

        // Delete the userGestadia
        webTestClient
            .delete()
            .uri(ENTITY_API_URL_ID, userGestadia.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        List<UserGestadia> userGestadiaList = userGestadiaRepository.findAll().collectList().block();
        assertThat(userGestadiaList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
