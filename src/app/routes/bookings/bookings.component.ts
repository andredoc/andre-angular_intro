import { Component, OnInit } from '@angular/core';
import { Observable, of, map, tap, throwError } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';


type BookingView = {
  id: string;
  description: string;
}

@Component({
  selector: 'app-bookings',
  template: `
    <h3>Bookings list (only crypto)</h3>
    <ul>
      <li *ngFor="let booking of (bookingViews$ | async) as bookings">
        {{ booking.description }}
        <button (click)="onDeleteClick(booking.id)">🗑</button>
      </li>
    </ul>
    <pre>{{ errorMessage }}</pre>
  `,
  styles: [
  ]
})
export class BookingsComponent implements OnInit {
  // bookings: Booking[] = [];
  bookingViews$: Observable<BookingView[]> = of([])
  errorMessage = "";

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.bookingViews$ = this.api.getBookings$().pipe(
      tap((bookings) => console.log("Booking from API", bookings)),
      tap((bookings) => 
        bookings.length > 0 ? bookings : throwError("No bookings found")
      ),
      map((bookings) => 
        bookings.filter((booking)=> booking.paymentMethod === "crypto")
      ),
      tap((bookings) => console.log("Crypto Bookings", bookings)),
      map((bookings) => 
          bookings.map((booking) => ({
            id: booking.id,
            description: 
              booking.tripId + 
              "_" + 
              booking.customerEmail + 
              "_" + 
              booking.paymentMethod
          }))
      ),    
      tap({ next: (bookings) => console.log("View Bookings : ", bookings) }),
      tap({ error: (error) => (this.errorMessage = error.message) })
    )

    // this.api.getBookings$().subscribe(
    //   (bookings) => {
    //     this.bookings = bookings
    //   },
    //   (error) => {
    //     this.errorMessage = error.message
    //   }
    // ),

    // this.api.getBookings$().subscribe(
    //   (bookings) => (this.bookings = bookings),
    //   (error) => (this.errorMessage = error.message)
    // ),

    // this.api.getBookings$().subscribe(
    //   {
    //     next: (bookings) => (this.bookings = bookings),
    //     error: (error) => (this.errorMessage = error.message)
    //   }
    // );
  }

  onDeleteClick(bookingId : string) {
    console.log("Deleting booking for trip:", bookingId)
    // this.api.deleteBooking$(bookingId).subscribe({
    //   next: () => (this.bookings = this.bookings.filter((booking) => booking.id !== bookingId)),
    //   error: (error) => (this.errorMessage = error.message)
    // })
  }
}

    // this.api.deleteBooking$(bookingId).subscribe({
    //   next: () => (this.bookings = this.bookings.filter((u) => u.id !== bookingId)),
    //   error: (error) => (this.errorMessage = error.message);
    // })