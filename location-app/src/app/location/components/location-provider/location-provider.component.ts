import { Component } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { LocationModel, LocationResponse } from '../../interfaces/location.interface';

/**
 * LocationProviderComponent to render location view and handling location events
 */
@Component({
  selector: 'app-location-provider',
  templateUrl: './location-provider.component.html',
  providers: [ LocationService ]
})
export class LocationProviderComponent {

  public locationFormModel: LocationModel;
  public errorMessage: ErrorObservable | string;
  private locationService: LocationService;

  /**
   * @constructor
   * @param {LocationService} locationService - location service to get location details
   */
  constructor( locationService: LocationService) {
    this.locationService = locationService;
    this.locationFormModel = {
      address: '',
      latitude: '',
      longitude: ''
    };
  }

  /**
   * To get location details
   */
  public getLocation() {
    if ( this.locationFormModel.address.length > 0 ) {
      this.locationService.getLocation( this.locationFormModel.address ).subscribe(
        ( data: LocationResponse ) => {
           this.locationFormModel.latitude = data.latitude;
           this.locationFormModel.longitude = data.longitude;
        },
        ( error: ErrorObservable ) => {
         this.errorMessage = error;
        });
    }
  }

  /**
   * To clear lat long model in case start changing address
   */
  public clearLatLongModel() {
    this.locationFormModel.latitude = '';
    this.locationFormModel.longitude = '';
    this.errorMessage = '';
  }

}
