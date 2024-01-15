import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero-service.service';
import { API_URLS } from '../constants';
import { GetHeroesResponse, Hero, HeroQueryParams } from '../models/hero.model';

describe('HeroService', () => {
  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });

    service = TestBed.inject(HeroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add a new hero', async () => {
    const heroName = 'New Hero';
    const params: HeroQueryParams = { heroName: heroName };
    let result;
    await service.addNewHero(params).then(() => {
    });
    await service.getAllHeroes().then((data: GetHeroesResponse) => {
      result = data.data.heroes.find((hero) => {
        return hero.name === heroName.toUpperCase();
      });
      expect(result?.name).toEqual(heroName.toUpperCase());
    });
  });

  it('should modify a hero', async () => {
    const myHero = { id: '10', name: 'Test Hero' };
    let result;
    await service.modifyHero(myHero).then(() => {});
    await service.getAllHeroes().then((data: GetHeroesResponse) => {
      result = data.data.heroes.find((hero) => {
        console.log(hero)
        return hero.name === myHero.name.toUpperCase();
      });
      expect(result?.name).toEqual(myHero.name.toUpperCase());
    });
  });

  it('should delete a hero', async () => {
    const id = '1';
    const params: HeroQueryParams = { id };
    const response = [{ id: '0', name: 'Another Hero' }];
  
    await service.deleteHero(params).then((data: GetHeroesResponse) => {
      expect(data.data.heroes[0].id).toEqual(response[0].id);
    });
  });
});