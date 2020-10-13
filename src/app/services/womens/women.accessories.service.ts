import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class WomenAccessories{
    public WOMEN_ACCESSORIES_API=`assets/data/women-accessories.json`
    constructor(private http:HttpClient){

    }
    
   getWomenAccessories():Observable<any>{
   return this.http.get(`${this.WOMEN_ACCESSORIES_API}`)
   }
    

}