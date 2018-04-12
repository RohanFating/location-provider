import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationProviderComponent } from './components/location-provider/location-provider.component';
import { HttpClientModule } from '@angular/common/http';

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
