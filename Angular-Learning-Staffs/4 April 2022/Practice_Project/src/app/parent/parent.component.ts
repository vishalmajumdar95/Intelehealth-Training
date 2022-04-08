import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  message:string="Hello From Parent";

  company = {
    name:'bitcode',
    city:'pune',
    state:'Maharatstra'
  }

  arr:number[]=[10,20,30];

  getname() {
    return "sachin";
  }

  ngOnInit(): void {
  }

}
