import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:"root"
})
export class ManSportswearService{
    public MANS_SPORTSWEAR_API=`assets/data/man.sportswear.json`
    constructor(private http:HttpClient){
    }
   getManSpportswear(){
       return this.http.get(`${this.MANS_SPORTSWEAR_API}`)
   }
}