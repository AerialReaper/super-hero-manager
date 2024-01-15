import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHeroComponent } from './modify-hero.component';

describe('ModifyHeroComponent', () => {
  let component: ModifyHeroComponent;
  let fixture: ComponentFixture<ModifyHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
