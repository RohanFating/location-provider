import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationProviderComponent } from './components/location-provider/location-provider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ LocationProviderComponent ],
  declarations: [ LocationProviderComponent ]
})
export class LocationModule { }
