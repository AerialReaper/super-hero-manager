import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchHeroComponent } from './search-hero.component';
import { HeroService } from 'src/app/services/hero-service.service';
import { Hero } from 'src/app/models/hero.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('SearchHeroComponent', () => {
  let component: SearchHeroComponent;
  let fixture: ComponentFixture<SearchHeroComponent>;
  let heroServiceSpy: jasmine.SpyObj<HeroService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HeroService', ['getHeroesByName']);
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule,
        BrowserAnimationsModule],
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

  xit('should emit hero results when submit is called', fakeAsync(() => {
    const mockHeroes: Hero[] = [
      { id: '1', name: 'Hero1' },
      { id: '2', name: 'Hero2' }
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
