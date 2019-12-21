import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelsComponent } from './hotels-layout/hotels.component';
import { HotelsFilterComponent } from './hotels-filter/hotels-filter.component';
import { HttpClientModule } from '@angular/common/http'
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HotelsListComponent, HotelCardComponent, HotelsComponent, HotelsFilterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
  ],
  exports: [HotelsComponent],
})
export class HotelsModule { }
