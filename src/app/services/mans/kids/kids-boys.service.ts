import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class KidsBoysService{
    public KIDS_BOYS_API=`assets/data/kids.boys.json`
    constructor(private http:HttpClient){
    }
    getKidsBoysService():Observable<any>{
        return this.http.get(`${this.KIDS_BOYS_API}`)
    }
}