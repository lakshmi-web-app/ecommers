import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myName:string= 'Murali';
  Lakshmi:any []=[
    {id:1,name:'santhu',addres:'plk'},
    {id:2,name:'siri',addres:'plk'},
    {id:3,name:'vidya',addres:'plk'},
    {id:4,name:'chandu',addres:'plk'},
    {id:5,name:'subbu',addres:'plk'},
    {id:6,name:'ramana',addres:'plk'},
    {id:7,name:'durga',addres:'plk'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
