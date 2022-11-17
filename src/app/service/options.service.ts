import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  paymentMethodOptions = [
    { value: "", label: "👇🏼 Choose an option" },
    { value: "cash", label: "💵 Cash" },
    { value: "credit", label: "💳 Card" },
    { value: "transfer", label: "🏦 Bank" },
    { value: "crypto", label: "🪙 Crypto" },
  ];
  statusOptions = [
    { value: "pending", label: "🕒 Pending" },
    { value: "confirmed", label: "✅ Confirmed" },
    { value: "cancelled", label: "❌ Cancelled" },
  ];
  
  constructor() { }
}
