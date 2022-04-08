import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  Cdata:any;
  constructor() { }

  ngOnInit(): void {
  }
  receiData(val:any){
    this.Cdata = val;
  }
  
}
