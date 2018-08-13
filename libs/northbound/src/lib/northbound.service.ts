import { Injectable } from '@angular/core';
import { RestService } from '@tp-ui/tp-core';
import { Observable, of } from 'rxjs';
import resource from './northbound.resource.json';

@Injectable({
  providedIn: 'root'
})
export class TpNorthboundService {

  constructor(private restService: RestService) {}

  load(): Observable<any> {
    // return this.restService.get(resource.path);

    // A mock data for test.
    return of(resource.mock);
  }

  update(data): Observable<any> {
    return this.restService.put(resource.path, data);
  }
}
