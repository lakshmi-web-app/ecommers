import { Component, OnInit } from '@angular/core';
import { ManAccessoriesService } from 'src/app/services/mans/man.accessories.service';

@Component({
  selector: 'app-man-accessories',
  templateUrl: './man-accessories.component.html',
  styleUrls: ['./man-accessories.component.css']
})
export class ManAccessoriesComponent implements OnInit {
  public getAccessories:any=[];
  constructor(private manaccessories:ManAccessoriesService) { }

  ngOnInit(): void {
    this.getManAccessories();
  }
 getManAccessories(){
   this.manaccessories.getManAccessories().subscribe(
    (response:any)=>{
      console.log(`Response MEssage :: `,response);
      this.getAccessories= response;
    },
    (error)=>{
      console.log(`Error MEssage :: `,error);
    }
   )
 }
}
