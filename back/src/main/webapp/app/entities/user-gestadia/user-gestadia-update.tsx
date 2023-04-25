import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserGestadia } from 'app/shared/model/user-gestadia.model';
import { getEntity, updateEntity, createEntity, reset } from './user-gestadia.reducer';

export const UserGestadiaUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const userGestadiaEntity = useAppSelector(state => state.userGestadia.entity);
  const loading = useAppSelector(state => state.userGestadia.loading);
  const updating = useAppSelector(state => state.userGestadia.updating);
  const updateSuccess = useAppSelector(state => state.userGestadia.updateSuccess);

  const handleClose = () => {
    navigate('/user-gestadia' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...userGestadiaEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...userGestadiaEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gestadiaApp.userGestadia.home.createOrEditLabel" data-cy="UserGestadiaCreateUpdateHeading">
            Criar ou editar User Gestadia
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField name="id" required readOnly id="user-gestadia-id" label="Código" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Password Hash"
                id="user-gestadia-password_hash"
                name="password_hash"
                data-cy="password_hash"
                type="text"
                validate={{
                  required: { value: true, message: 'O campo é obrigatório.' },
                  minLength: { value: 4, message: 'Este campo deve ter pelo menos 4 caracteres.' },
                  maxLength: { value: 8, message: 'Este campo não pode ter mais de 8 caracteres.' },
                }}
              />
              <ValidatedField
                label="Email"
                id="user-gestadia-email"
                name="email"
                data-cy="email"
                type="text"
                validate={{
                  required: { value: true, message: 'O campo é obrigatório.' },
                  minLength: { value: 5, message: 'Este campo deve ter pelo menos 5 caracteres.' },
                  maxLength: { value: 20, message: 'Este campo não pode ter mais de 20 caracteres.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-gestadia" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Voltar</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Salvar
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default UserGestadiaUpdate;
