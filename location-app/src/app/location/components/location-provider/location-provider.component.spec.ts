import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationProviderComponent } from './location-provider.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { LocationService } from '../../services/location.service';
import { LOCATION_RESPONSE } from '../../services/mock-location.response';

/**
 * Unit testing for LocationProviderComponent
 */
describe('LocationProviderComponent', () => {
  let component: LocationProviderComponent;
  let fixture: ComponentFixture<LocationProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationProviderComponent ],
      imports: [ FormsModule, HttpClientModule ],
      providers: [ LocationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.locationFormModel.latitude).toBe('');
    expect(component.locationFormModel.longitude).toBe('');
  });

  it('should get list of all cakes using getCakeList', () => {
    //  To test private functions
    const mockComponent: any = component;
    spyOn(mockComponent.locationService, 'getLocation').and.returnValue(Observable.of(LOCATION_RESPONSE));
    mockComponent.locationFormModel.address = 'paris';
    mockComponent.getLocation();
    expect(mockComponent.locationFormModel.latitude).toBe(LOCATION_RESPONSE.latitude);
    expect(mockComponent.locationFormModel.longitude).toBe(LOCATION_RESPONSE.longitude);
  });

  it('should clear all form data on clearModel', () => {
    component.locationFormModel.latitude = '1.121';
    component.locationFormModel.longitude = '21.11';
    component.clearLatLongModel();
    expect(component.locationFormModel.latitude).toBe('');
    expect(component.locationFormModel.longitude).toBe('');
  });
});
