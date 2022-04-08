import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { reduce } from "rxjs";


@Component({
    selector:'app-child',
    // template:`<h1>Hello From Inline Templet</h1>
    // <p>I Am Para</p>`,
    // styles:['h1{color:red;}']
    templateUrl:'./child.component.html',
    styleUrls:['./child.component.css']
})

export class ChildComponent{

}