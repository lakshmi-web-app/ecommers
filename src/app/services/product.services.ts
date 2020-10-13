import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ProductServices{
    public product_api=`assets/data/woman-product.json`;
    constructor(private lakshmi:HttpClient){

    }
    getwomenproducts():Observable<any>{
        return this.lakshmi.get(`${this.product_api}`);
    }
}
