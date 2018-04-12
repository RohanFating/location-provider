import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LocationProviderComponent } from './components/location-provider/location-provider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ LocationProviderComponent],
  declarations: [ LocationProviderComponent]
})
export class LocationModule { }
