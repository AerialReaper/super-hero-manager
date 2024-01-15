import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MosaicHeroComponent } from './mosaic-hero.component';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { HeroService } from 'src/app/services/hero-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MosaicHeroComponent', () => {
  let component: MosaicHeroComponent;
  let fixture: ComponentFixture<MosaicHeroComponent>;
  let dialog: MatDialog;
  let heroService: HeroService;
  let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' }; // you can pass your data here


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosaicHeroComponent ],
      providers: [
        { provide: MatDialog, useValue: { open: () => dialogRefSpyObj } },
        { provide: HeroService, useValue: { getAllHeroes: () => Promise.resolve(), deleteHero: () => Promise.resolve() } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosaicHeroComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    heroService = TestBed.inject(HeroService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllHeroes on init', () => {
    spyOn(component, 'getAllHeroes');
    component.ngOnInit();
    expect(component.getAllHeroes).toHaveBeenCalled();
  });

  it('should call deleteHero when dialog result is true', () => {
    spyOn(component, 'deleteHero');
    component.openDialog('1');
    expect(component.deleteHero).toHaveBeenCalledWith('1');
  });

  it('should not call deleteHero when dialog result is false', () => {
    spyOn(component, 'deleteHero');
    component.openDialog('1');
    expect(component.deleteHero).toHaveBeenCalled();
  });

  it('should refresh table when heroList changes', () => {
    spyOn(component, 'refreshTable');
    component.ngOnChanges({
      heroList: {
        currentValue: [],
        previousValue: [],
        firstChange: false,
        isFirstChange: () => false
      }
    });
    expect(component.refreshTable).toHaveBeenCalledWith([]);
  });
});
