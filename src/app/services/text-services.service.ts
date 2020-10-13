import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextServicesService {
 
  public PHONES_API = `assets/data/phones.json`;

  constructor(private http:HttpClient)  {
   }

   getPhones():Observable<any>{
    return this.http.get(`${this.PHONES_API}`);
   }
}
