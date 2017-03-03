import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {
  constructor(public el: ElementRef, public renderer: Renderer) { }

  @HostListener('mouseover') onMouseEnter() {
    this.hover(true);
  }
  @HostListener('mouseout') onMouseLeave() {
    this.hover(false);
  }

  hover(shouldUnderline: boolean) {    
    if (shouldUnderline) {
      this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
    }
  }
}
