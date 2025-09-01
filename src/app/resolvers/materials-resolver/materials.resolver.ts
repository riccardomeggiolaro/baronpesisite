import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { pick } from 'lodash';
import { MaterialsService } from 'src/app/services/materials.service';

export const materialsResolver: ResolveFn<void> = (route, state) => {
  const materialsSrv = inject(MaterialsService);
  const filters = pick(route.queryParams, ['description', 'installationId']);
  materialsSrv.list(filters);
};
