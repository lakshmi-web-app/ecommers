import { Component, OnInit } from '@angular/core';
import { KidsBoysService } from 'src/app/services/mans/kids/kids-boys.service';

@Component({
  selector: 'app-boys',
  templateUrl: './boys.component.html',
  styleUrls: ['./boys.component.css']
})
export class BoysComponent implements OnInit {
  public kidsboysdetailes:any=[];
  constructor(private boys:KidsBoysService) { }

  ngOnInit(): void {
    this.getKidsBoysDetailes();
  }
  getKidsBoysDetailes(){
    this.boys.getKidsBoysService().subscribe(
      (response:any)=>{
        console.log(`Response MEssage :: `,response);
        this.kidsboysdetailes = response;
      },
      (error)=>{
        console.log(`Error MEssage :: `,error);
      }
  
    )
  }
}
