 import { Component, OnInit } from '@angular/core';
import { WomenAccessories } from 'src/app/services/womens/women.accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  public AccessoriesDetailes:any=[];

  constructor(private accessories:WomenAccessories) { }

  ngOnInit(): void {
    this.getAccessoriesDetailes();
  }
  getAccessoriesDetailes(){
    this.accessories.getWomenAccessories().subscribe(
      (accessories:any)=>{
        this.AccessoriesDetailes = accessories;
          console.log(`Response Data :: `,accessories);
      },
      (err)=>{
        console.log(`Error Mesage ::`,err);
      }
    );  }

}
