import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { pick } from 'lodash';
import { EventsService } from 'src/app/services/events.service';

export const eventsResolver: ResolveFn<void> = (route, state) => {
  const eventSrv = inject(EventsService);
  const filters = pick(route.queryParams, ['dtMin', 'dtMax', 'numberCard', 'plate', 'socialReason', 'idInstallation']);
  eventSrv.list(filters);
};
