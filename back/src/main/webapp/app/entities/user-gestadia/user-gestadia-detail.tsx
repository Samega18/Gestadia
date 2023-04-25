import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-gestadia.reducer';

export const UserGestadiaDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const userGestadiaEntity = useAppSelector(state => state.userGestadia.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userGestadiaDetailsHeading">User Gestadia</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">Código</span>
          </dt>
          <dd>{userGestadiaEntity.id}</dd>
          <dt>
            <span id="password_hash">Password Hash</span>
          </dt>
          <dd>{userGestadiaEntity.password_hash}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{userGestadiaEntity.email}</dd>
        </dl>
        <Button tag={Link} to="/user-gestadia" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Voltar</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-gestadia/${userGestadiaEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Editar</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserGestadiaDetail;
