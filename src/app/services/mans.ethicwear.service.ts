import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn:"root"
})
export class MansEthicwearService{
    public MANS_ETHIC_WEAR_API=`assets/data/man-ethic.json`
    constructor( private mansethic:HttpClient){

    }
    getManethicwearProducts():Observable<any>{
        return this.mansethic.get(`${this.MANS_ETHIC_WEAR_API}`)

    }

}