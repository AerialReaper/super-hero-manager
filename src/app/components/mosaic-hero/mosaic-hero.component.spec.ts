import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicHeroComponent } from './mosaic-hero.component';

describe('MosaicHeroComponent', () => {
  let component: MosaicHeroComponent;
  let fixture: ComponentFixture<MosaicHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MosaicHeroComponent]
    });
    fixture = TestBed.createComponent(MosaicHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
