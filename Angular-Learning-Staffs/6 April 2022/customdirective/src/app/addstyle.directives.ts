import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appAddstyle]'
  })
  export class AddstyleDirective {
    constructor (private render:Renderer2, private el:ElementRef)
  { }
    @HostListener('click') onclick(){
      var div1 = this.render.createElement ('div');
      var text = this.render.createText('Hello Directive');
      this.render.appendChild(div1,text);
      this.render.addClass(div1,'back');
     this.render.appendChild (this.el.nativeElement, div1);
    }
}