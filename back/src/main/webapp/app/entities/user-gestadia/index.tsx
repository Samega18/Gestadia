import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import UserGestadia from './user-gestadia';
import UserGestadiaDetail from './user-gestadia-detail';
import UserGestadiaUpdate from './user-gestadia-update';
import UserGestadiaDeleteDialog from './user-gestadia-delete-dialog';

const UserGestadiaRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<UserGestadia />} />
    <Route path="new" element={<UserGestadiaUpdate />} />
    <Route path=":id">
      <Route index element={<UserGestadiaDetail />} />
      <Route path="edit" element={<UserGestadiaUpdate />} />
      <Route path="delete" element={<UserGestadiaDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default UserGestadiaRoutes;
