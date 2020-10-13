import { Component, OnInit } from '@angular/core';
import { KidsGirlsService } from 'src/app/services/mans/kids/kids.girls.service';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {
   public girls:any=[];
  constructor( private kidsgirls:KidsGirlsService) { }

  ngOnInit(): void {
    this.getGirlsDetailes();
  }
 getGirlsDetailes(){
  this.kidsgirls.getKidsGirlsService().subscribe(
    (response:any)=>{
      console.log(`Response MEssage :: `,response);
      this.girls= response;
    },
    (error)=>{
      console.log(`Error MEssage :: `,error);
    }

  )
}
}
