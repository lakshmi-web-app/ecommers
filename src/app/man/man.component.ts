import { Component, OnInit } from '@angular/core';
import { TextServicesService } from '../services/text-services.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css']
})
export class ManComponent implements OnInit {
  public phoneDetails:any=[];

  constructor(private TextService:TextServicesService) { }

  ngOnInit(): void {
    this.getphoneDetails();
  }
  getphoneDetails(){
    this.TextService.getPhones().subscribe(
      (waste:any)=>{
        this.phoneDetails = waste;
        console.log(`Response Data :: `,waste)
      },
      (www)=>{
        console.log(`Error Mesage ::`,www);
      }

    )
  }
}
