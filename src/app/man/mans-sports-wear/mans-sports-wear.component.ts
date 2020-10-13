import { Component, OnInit } from '@angular/core';
import { ManSportswearService } from 'src/app/services/mans/man.sportswear.service';

@Component({
  selector: 'app-mans-sports-wear',
  templateUrl: './mans-sports-wear.component.html',
  styleUrls: ['./mans-sports-wear.component.css']
})
export class MansSportsWearComponent implements OnInit {
   public ManWesternwearDetailes:any=[];
  constructor(private mansportswearService:ManSportswearService) { }

  ngOnInit(): void {
    this.getManWesternwearDetailes();
  }
   getManWesternwearDetailes(){
     this.mansportswearService.getManSpportswear().subscribe(
      (response:any)=>{
        console.log(`Response MEssage :: `,response);
        this.ManWesternwearDetailes= response;
      },
      (error)=>{
        console.log(`Error MEssage :: `,error);
      }
     )
   }
}
