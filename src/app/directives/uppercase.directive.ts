import { Directive, ElementRef, Renderer2, Self, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appUppercase]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UppercaseDirective),
      multi: true,
    },
  ],
})
export class UppercaseDirective {
  constructor(
    @Self() private _el: ElementRef, 
    private _renderer: Renderer2
  ) { 
  }

  ngAfterViewInit(): void {
    if(this._el.nativeElement.innerHTML){
      const value = this._el.nativeElement.innerHTML.toUpperCase();
      this._renderer.setProperty(this._el.nativeElement, 'innerHTML', value);
    }
  }
}
