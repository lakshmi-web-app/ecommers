import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class MansWesternwearService {
    public MANS_WESTERNWEAR_API=`assets/data/men-westernwear.json`
    constructor(private http:HttpClient){
        
    }
getMansWesternwear():Observable<any>{
return this.http.get(`${this.MANS_WESTERNWEAR_API}`)
}
}