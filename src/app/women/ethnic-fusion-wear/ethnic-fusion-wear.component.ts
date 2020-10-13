import { Component, OnInit } from '@angular/core';
import { ProductServices } from 'src/app/services/product.services';

@Component({
  selector: 'app-ethnic-fusion-wear',
  templateUrl: './ethnic-fusion-wear.component.html',
  styleUrls: ['./ethnic-fusion-wear.component.css']
})
export class EthnicFusionWearComponent implements OnInit {

  public womenProducts:any=[];
  constructor(private asdf:ProductServices) { }


  ngOnInit(): void {
    this.getwomenproducts();
  }

  getwomenproducts(){
    this.asdf.getwomenproducts().subscribe(
      (data:any)=>{
        this.womenProducts = data;
          console.log(`Response Data :: `,data);
      },
      (qqq)=>{
        console.log(`Error Mesage ::`,qqq);
      }

    )
  } 
}
