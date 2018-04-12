import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LocationProviderComponent } from './location/components/location-provider/location-provider.component';
import { LocationService } from './location/services/location.service';
import { HttpClientModule } from '@angular/common/http';

/**
 * Unit testing for AppComponent
 */
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule ],
      declarations: [
        AppComponent,
        LocationProviderComponent,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  }));
});
