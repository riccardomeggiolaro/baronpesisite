import { ResolveFn } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { pick } from 'lodash';
import { inject } from '@angular/core';

export const usersResolver: ResolveFn<void> = (route, state) => {
  console.log("Change filters")
  const usersSrv = inject(UsersService);
  const filters = pick(route.queryParams, ['username', 'installationId']);
  usersSrv.list(filters);
};