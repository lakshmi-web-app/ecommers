import { Component, OnInit } from '@angular/core';
import { MansEthicwearService } from 'src/app/services/mans.ethicwear.service';

@Component({
  selector: 'app-mans-ethicwear',
  templateUrl: './mans-ethicwear.component.html',
  styleUrls: ['./mans-ethicwear.component.css']
})
export class MansEthicwearComponent implements OnInit {

  public manProducts:any=[];

  constructor( private mansethiwear:MansEthicwearService ) { }

  ngOnInit(): void {
    this.getManProducts();
  }


  getManProducts(){
    this.mansethiwear.getManethicwearProducts().subscribe(
      (mandata:any)=>{
      this.manProducts =mandata;
      console.log(`Response Data ::`, mandata);
      },
      (mmm)=>{
        console.log(`Error Mesage ::`,mmm);
      }

    )
  }

}
