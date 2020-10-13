import { Component, OnInit } from '@angular/core';
import { WomenWesternwear } from 'src/app/services/womens/women.westernwear.service';

@Component({
  selector: 'app-western-wear',
  templateUrl: './western-wear.component.html',
  styleUrls: ['./western-wear.component.css']
})
export class WesternWearComponent implements OnInit {
  public womenesternwearproducts: any=[];

  constructor(private westernwear:WomenWesternwear) { }

  ngOnInit(): void {
    this.getWomenWesternwearProducts();
  }
   getWomenWesternwearProducts(){
      this.westernwear.getWomenWesternwear().subscribe(
        (west:any)=>{
          this.womenesternwearproducts=west;
          console.log(`Response Data :: `,west);
        },
        (www)=>{
          console.log(`Error Mesage ::`,www);
        }
      )

   }
}
