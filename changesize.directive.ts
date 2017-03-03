import { Directive, HostBinding, HostListener, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appChangeSize]'
})
export class ChangeSizeDirective {
  @Input() appChangeSize: boolean;

  constructor(public el: ElementRef, public renderer: Renderer) { }

  @HostBinding('attr.size') size = "50px";

  @HostListener('click', ['$event']) onClick() {
    this.renderer.setElementStyle(this.el.nativeElement, 'font-size', this.size);
  }
 
  ngOnInit() {    
    if (this.appChangeSize) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    }
  }
}
