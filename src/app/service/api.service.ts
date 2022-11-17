import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency } from '../models/agency.interface';
import { Trip } from '../models/trip.interface';
import { Booking } from '../models/booking.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAgencies() {
    return this.http.get<Agency[]>(this.apiUrl + "/agencies");
  }

  getBookings() {
    return this.http.get<Booking[]>(this.apiUrl + "/bookings");
  }

  getTrips() {
    return this.http.get<Trip[]>(this.apiUrl + "/trips");
  }
}
