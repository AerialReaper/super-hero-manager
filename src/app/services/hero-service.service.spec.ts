import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero-service.service';
import { API_URLS } from '../constants';
import { GetHeroesResponse, Hero } from '../models/hero.model';

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
    let result;
    await service.addNewHero(heroName).then(() => {
    });
    await service.getAllHeroes().then((data: GetHeroesResponse) => {
      result = data.data.heroes.find((hero) => {
        return hero.name === 'NEW HERO';
      });
      expect(result?.name).toEqual('NEW HERO');
    });
  });

  it('should modify a hero', async () => {
    const hero = { id: '1', name: 'Test Hero' };
    let result;
    await service.modifyHero(hero).then(() => {});
    await service.getAllHeroes().then((data: GetHeroesResponse) => {
      result = data.data.heroes.find((hero) => {
        return hero.name === 'TEST HERO';
      });
      expect(result?.name).toEqual('TEST HERO');
    });
  });

  it('should delete a hero', async () => {
    const id = '1';
    const response = [{ id: '0', name: 'Another Hero' }];
  
    await service.deleteHero(id).then((data: GetHeroesResponse) => {
      expect(data.data.heroes[0].id).toEqual(response[0].id);
    });
  });
});