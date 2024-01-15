import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllHeroesComponent } from './view-all-heroes.component';

describe('ViewAllHerosComponent', () => {
  let component: ViewAllHeroesComponent;
  let fixture: ComponentFixture<ViewAllHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllHeroesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
