import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appUppercaseInput]'
})
export class UppercaseInputDirective {

    constructor(private el: ElementRef) {}

    @HostListener('input', ['$event']) onInputChange(event: { target: { value: string; }; preventDefault: () => void; }) {
        const start = this.el.nativeElement.selectionStart;
        const end = this.el.nativeElement.selectionEnd;
        this.el.nativeElement.value = event.target.value.toUpperCase();
        this.el.nativeElement.setSelectionRange(start, end);
        event.preventDefault();
    }
}