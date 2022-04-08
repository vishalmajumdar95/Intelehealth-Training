import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // emp1 = new Employee (101, "sachin");

  title: string = 'directive';
  isvalid: boolean = true;
  gender: string = 'male';
  onchange(val: boolean) {
    this.isvalid = val;
  }

  persons = [
    { id: 101, name: 'SAchin' },
    { id: 102, name: 'VIRAT' },
    { id: 103, name: 'Ashish' },
    { id: 104, name: 'Hardik' },
    { id: 105, name: 'Dhoni' },
  ];

  fcolor = 'Yellow';

  title1: string = 'directive';
  isgendervalid: boolean = true;
  gender1: string = 'male';
  ongenderchange(val: string) {
    this.gender1 = val;
  }
}
