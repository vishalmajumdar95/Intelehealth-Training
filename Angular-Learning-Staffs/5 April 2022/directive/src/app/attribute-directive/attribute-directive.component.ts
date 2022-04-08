import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  multiCss={
    'color':'yellow',
    'backgroundColor':'gray',
    'fontStyle':'italic'
  }

  multiClass={
    'bgColor':'true',
    'fontStyle':true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
