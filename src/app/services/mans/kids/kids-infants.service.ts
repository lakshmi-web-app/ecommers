import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:"root"
})
export class KidsInfantsService{
    public KIDS_INFANTS_API=`assets/data/kids-infants.json`
    constructor( private http:HttpClient){
    }
    getKidsInfantsService(){
        return this.http.get(`${this.KIDS_INFANTS_API}`)
    }
}