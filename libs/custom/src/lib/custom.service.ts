import { Injectable } from '@angular/core';
import { RestService } from '@tp-ui/tp-core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TpCustomService {

  /**
   * The mock data for example.
   */
  mock = {
    enable: true,
    transport_protocol: 'AMQP',
    cloud_connect_status: true,
    connection_string: 'abcdefghijk',
    DeviceId: 'test',
    SharedAccessKey: 'lmnopqrstuvwxyz',
    tags: [
      {
        tagName: 'di0',
        srcName: 'My_ioLogik-E2242',
        logOnChange: false,
        logDataType: false,
        dataType: 'uint32',
        logDataUnit: false,
        dataUnit: 'voltage'
      },
      {
        tagName: 'di1',
        srcName: 'My_ioLogik-E2242',
        logOnChange: false,
        logDataType: false,
        dataType: 'uint32',
        logDataUnit: false,
        dataUnit: 'voltage'
      },
      {
        tagName: 'di2',
        srcName: 'My_ioLogik-E2242',
        logOnChange: false,
        logDataType: false,
        dataType: 'uint32',
        logDataUnit: false,
        dataUnit: 'voltage'
      },
      {
        tagName: 'di3',
        srcName: 'My_ioLogik-E2242',
        logOnChange: false,
        logDataType: false,
        dataType: 'uint32',
        logDataUnit: false,
        dataUnit: 'voltage'
      }
    ]
  };

  constructor(
    private restService: RestService,
    private httpService: HttpClient) {}

  loadResource(): Observable<any> {
   return this.httpService.get('assets/app.resource.json');
  }

  load(): Observable<any> {
    /**
     * Todo: You need to get data using RESTful service `restService`.
     * e.g. this.restService.get('/app/data')
     */
    return of(this.mock);
  }

  update(data): Observable<any> {
    /**
    * Todo: You need to update data using RESTful service `restService`.
    * e.g. this.restService.put((resource as any).path, data);
    */
    return of(data);
  }
}
