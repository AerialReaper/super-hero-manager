// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SearchHeroComponent } from './search-hero.component';

// describe('SearchHeroComponent', () => {
//   let component: SearchHeroComponent;
//   let fixture: ComponentFixture<SearchHeroComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [SearchHeroComponent]
//     });
//     fixture = TestBed.createComponent(SearchHeroComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchHeroComponent } from './search-hero.component';
import { HeroService } from 'src/app/services/hero-service.service';
import { EventEmitter } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { of } from 'rxjs';

describe('SearchHeroComponent', () => {
  let component: SearchHeroComponent;
  let fixture: ComponentFixture<SearchHeroComponent>;
  let heroServiceSpy: jasmine.SpyObj<HeroService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HeroService', ['getHeroesByName']);
    TestBed.configureTestingModule({
      declarations: [SearchHeroComponent],
      providers: [{ provide: HeroService, useValue: spy }]
    });
    fixture = TestBed.createComponent(SearchHeroComponent);
    component = fixture.componentInstance;
    heroServiceSpy = TestBed.inject(HeroService) as jasmine.SpyObj<HeroService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit hero results when submit is called', fakeAsync(() => {
    const mockHeroes: Hero[] = [
      { id: 1, name: 'Hero1' },
      { id: 2, name: 'Hero2' }
    ];

    const emitSpy = spyOn(component.heroResultEmiter, 'emit');

    component.search = 'Hero';
    component.submit();
    tick();

    expect(heroServiceSpy.getHeroesByName).toHaveBeenCalledWith('Hero');
    expect(emitSpy).toHaveBeenCalledWith(mockHeroes);
  }));

  it('should not emit hero results if search is empty', fakeAsync(() => {
    const emitSpy = spyOn(component.heroResultEmiter, 'emit');

    component.submit();
    tick();

    expect(heroServiceSpy.getHeroesByName).not.toHaveBeenCalled();
    expect(emitSpy).not.toHaveBeenCalled();
  }));
});
