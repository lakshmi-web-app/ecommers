import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class WomenWesternwear{
 
    public WOMEN_WESTERN_WEAR_API=`assets/data/womens.westernwear.json`

    constructor(private http:HttpClient){
  }
  getWomenWesternwear():Observable<any>{
    return this.http.get(`${this.WOMEN_WESTERN_WEAR_API}`)
  }
    
} 