import { Component, OnInit } from '@angular/core';
import { TextServicesService } from '../services/text-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public phoneDetails:any=[];

  constructor(private TextService:TextServicesService) { }

  ngOnInit(): void {
    this.getPhoneDetails();
  }

  getPhoneDetails(){
    this.TextService.getPhones().subscribe(
      (res:any)=>{
        this.phoneDetails = res;
          console.log(`Response Data :: `,res);
      },
      (err)=>{
        console.log(`Error Mesage ::`,err);
      }
    );
  }

}
