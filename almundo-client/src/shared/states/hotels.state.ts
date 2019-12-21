import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Hotel } from '../models/hotel.model';
import { GetHotels } from '../actions/hotels.actions';
import { HotelsService } from '../../app/hotels/hotels.service';
import { tap } from 'rxjs/operators';

export class HotelStateModel {
  hotels: Hotel[];
  filters?: object
}

@State<HotelStateModel>({
  name: 'hotels',
  defaults: {
    hotels: [],
  }
})
export class HotelState {

  constructor(private hotelService: HotelsService) {
  }

  @Selector()
  static getHotelList(state: HotelStateModel) {
    return state.hotels;
  }

  @Action(GetHotels)
  getHotels({ getState, setState }: StateContext<HotelStateModel>) {
    return this.hotelService.get_hotels().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        hotels: result,
      });
    }));
  }
}
