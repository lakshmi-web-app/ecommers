import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class KidsGirlsService{
public KIDS_GIRLS_API=`assets/data/kids-girls.json`
constructor( private http:HttpClient){
}
getKidsGirlsService():Observable<any>{
    return this.http.get(`${this.KIDS_GIRLS_API}`)
}
}