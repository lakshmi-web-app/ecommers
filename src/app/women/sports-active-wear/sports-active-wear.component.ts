import { Component, OnInit } from '@angular/core';
import { WomenSportswearService } from 'src/app/services/womens/women.sportswear.service';

@Component({
  selector: 'app-sports-active-wear',
  templateUrl: './sports-active-wear.component.html',
  styleUrls: ['./sports-active-wear.component.css']
})
export class SportsActiveWearComponent implements OnInit {
public sportsearDetailes:any=[];
  constructor(private sportswear:WomenSportswearService) { 

  }

  ngOnInit(): void {
    this.getSportsWearDetalis();
  }

  getSportsWearDetalis(){
    this.sportswear.getWomenSportswearService().subscribe(
      (response:any)=>{
        console.log(`Response MEssage :: `,response);
        this.sportsearDetailes = response;
      },
      (error)=>{
        console.log(`Error MEssage :: `,error);
      }
    );
    
  }

}
