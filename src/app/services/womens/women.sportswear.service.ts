import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class WomenSportswearService{
    public WOMEN_SPORTSWEAR_API=`assets/data/women.sportswear.json`
    constructor(private http:HttpClient){

    }

     getWomenSportswearService():Observable<any>{
      return this.http.get(`${this.WOMEN_SPORTSWEAR_API}`)
     }
}