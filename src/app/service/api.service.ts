import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency } from '../models/agency.interface';
import { Trip } from '../models/trip.interface';
import { Booking } from '../models/booking.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getAgencies$(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.apiUrl + "/agencies");
  }

  postAgency$(agency: Agency) {
    return this.http.post<Agency[]>(this.apiUrl + "/agencies", agency);
  }

  deleteAgency$(id: string) {
    return this.http.delete(this.apiUrl + "/agencies/" + id)
  }

  getBookings$() {
    return this.http.get<Booking[]>(this.apiUrl + "/bookings");
  }

  postBooking$(booking: Booking) {
    return this.http.post<Booking>(this.apiUrl + '/bookings', booking)
  }

  deleteBooking$(tripId: string) {
    return this.http.delete(this.apiUrl + '/bookings/' + tripId)
  }

  getTrips$() {
    return this.http.get<Trip[]>(this.apiUrl + "/trips");
  }
}
