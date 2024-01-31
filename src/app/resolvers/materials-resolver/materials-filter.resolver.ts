import { ResolveFn } from '@angular/router';
import { pick } from 'lodash';
import { MaterialFilter } from 'src/app/services/materials.service';

export const materialsFilterResolver: ResolveFn<MaterialFilter> = (route, state) => {
  return pick(route.queryParams, ['description', 'installationId'])
};
