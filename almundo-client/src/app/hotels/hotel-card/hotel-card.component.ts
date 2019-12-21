import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.less']
})
export class HotelCardComponent implements OnInit {
  @Input() hotel
  private stars
  constructor() { }

  ngOnInit() {
    this.stars = new Array(this.hotel.stars)
  }

}
