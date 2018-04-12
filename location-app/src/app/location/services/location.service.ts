import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { AppConstant } from '../../constants/constants';
import { API_BASE_URL } from '../../config/app.config';
import { LocationResponse } from '../interfaces/location.interface';

@Injectable()
export class LocationService {

  private http: HttpClient;

  /**
   * Construction function
   * @param {HttpClient} http - http client
   */
  constructor(http: HttpClient) {
    this.http = http;
  }

 /**
  * To location details
  * @param {string} address - address entered by user to get lat long
  */
  public getLocation(address: string): Observable<LocationResponse> {
    return this.http.get(`${API_BASE_URL}${address}`)
            .pipe(
              map( ( data: any ) => this. getLatLong( data )),
              catchError( this.handleError )
            );
  }

  /**
   * To retreive lat long from data
   * @param {any} response: response coming from server
   */
  public getLatLong( response: any ): LocationResponse {
    return {
      latitude: `${response.results[0].geometry.location.lat}`,
      longitude: `${response.results[0].geometry.location.lng}`
    };
  }

  /**
   * To handle service error
   * @param error - error from server
   */
  private handleError(): ErrorObservable {
    return new ErrorObservable( AppConstant.ERROR_MESSAGE );
  }

}
