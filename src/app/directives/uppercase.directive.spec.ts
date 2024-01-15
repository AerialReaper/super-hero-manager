import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UppercaseDirective } from './uppercase.directive';

@Component({
  template: '<div appUppercase [innerHTML]="text"></div>',
})
class TestComponent {
  text = 'lowercase';
}

describe('UppercaseDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directiveEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UppercaseDirective, TestComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: UppercaseDirective,
          multi: true,
        },
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveEl = fixture.debugElement.query(By.directive(UppercaseDirective));

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directiveEl).toBeTruthy();
  });

  it('should transform text to uppercase', () => {
    component.text = 'lowercase';
    fixture.detectChanges();

    const transformedText = directiveEl.nativeElement.innerHTML;
    expect(transformedText).toBe('LOWERCASE');
  });
});