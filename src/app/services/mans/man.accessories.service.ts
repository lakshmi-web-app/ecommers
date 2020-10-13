import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class ManAccessoriesService{
    public MAN_ACCESSORIES_API=`assets/data/man-accessories.json`
    constructor(private http:HttpClient){
    }
   getManAccessories():Observable<any>{
    return this.http.get(`${this.MAN_ACCESSORIES_API}`)
   }
    } 
