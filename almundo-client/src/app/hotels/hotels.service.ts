import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/shared/models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private httpClient: HttpClient) { }
  private baseUrl: string = "http://localhost:3000/api/v1";

  get_hotels(filters?) {
    return this.httpClient.get<Hotel[]>(this.baseUrl + '/hotels', {
      params: filters})
  }
}
