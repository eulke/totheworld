import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { HotelState } from 'src/shared/states/hotels.state';
import { Hotel } from 'src/shared/models/hotel.model';
import { GetHotels } from 'src/shared/actions/hotels.actions';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.less']
})
export class HotelsListComponent implements OnInit {
  @Select(HotelState.getHotelList) hotels: Observable<Hotel[]>

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetHotels())
  }

}
