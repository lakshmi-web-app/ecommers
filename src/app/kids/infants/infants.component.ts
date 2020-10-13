import { Component, OnInit } from '@angular/core';
import { KidsInfantsService } from 'src/app/services/mans/kids/kids-infants.service';

@Component({
  selector: 'app-infants',
  templateUrl: './infants.component.html',
  styleUrls: ['./infants.component.css']
})
export class InfantsComponent implements OnInit {
   public kidsinfants:any=[];
  constructor(private infants:KidsInfantsService) { }

  ngOnInit(): void {
    this.getKidsInfantsDetailes();
  }
  getKidsInfantsDetailes(){
  this.infants.getKidsInfantsService().subscribe(
    (response:any)=>{
      console.log(`Response MEssage :: `,response);
      this.kidsinfants = response;
    },
    (error)=>{
      console.log(`Error MEssage :: `,error);
    }

  )
  }
}
