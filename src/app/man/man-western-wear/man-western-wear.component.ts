import { Component, OnInit } from '@angular/core';
import { MansWesternwearService } from 'src/app/services/mans/mans.westernwear.service';

@Component({
  selector: 'app-man-western-wear',
  templateUrl: './man-western-wear.component.html',
  styleUrls: ['./man-western-wear.component.css']
})
export class ManWesternWearComponent implements OnInit {
  public manwesternwearDetailes:any=[];
  constructor( private westernwear:MansWesternwearService) { }

  ngOnInit(): void {
    this.getManWesternwearDetailes();
  }
  getManWesternwearDetailes(){
   this.westernwear.getMansWesternwear().subscribe(
    (response:any)=>{
      console.log(`Response MEssage :: `,response);
      this.manwesternwearDetailes = response;
    },
    (error)=>{
      console.log(`Error MEssage :: `,error);
    }
   )
  }
}
