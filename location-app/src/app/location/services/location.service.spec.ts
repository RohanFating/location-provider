import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './location.service';
import { BaseRequestOptions, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { LOCATION_MOCK_RESPONSE } from './mock-location.response';
import { AppConstant } from '../../constants/constants';
import { LocationResponse } from '../interfaces/location.interface';

/**
 * Unit testing for LocationService
 */
describe('LocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LocationService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([LocationService], (service: LocationService) => {
    expect(service).toBeDefined();
  }));

  /**
   * Validating getLocation success
   */
  it('should call getLocation service to get location info as per address',
   inject([LocationService, XHRBackend], (service: LocationService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: LOCATION_MOCK_RESPONSE
      })));
    });
    service.getLocation('paris').subscribe(( data: LocationResponse ) => {
      expect(data.latitude).toBe( '48.856614' );
      expect(data.longitude).toBe( '2.3522219' );
    },
      (err) => {
        fail('Error in service call');
      });
  }));

  /**
   * Validating getLocation error
   */
  it('should validate error scenario for getLocation service', inject([LocationService, XHRBackend],
    (service: LocationService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockError(new Error( AppConstant.ERROR_MESSAGE ));
      });
      service.getLocation('').subscribe(( data: LocationResponse ) => {
        fail('Error in service call');
      },
        (err: any ) => {
          expect(err).toBe( AppConstant.ERROR_MESSAGE );
        });
    }));
});
