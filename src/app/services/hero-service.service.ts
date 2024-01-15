import { Injectable } from '@angular/core';
import { GetHeroesResponse, Hero, HeroByIdParams } from '../models/hero.model';
import { API_URLS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }

  async getAllHeroes(): Promise<GetHeroesResponse> {
    const data = await fetch(API_URLS.getHeroesUrl,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json' 
    }});
    return await data.json() ?? [];
  }

  async getHeroById(heroByIdParams: HeroByIdParams): Promise<Hero> {
    const data = await fetch(API_URLS.getHeroByIdUrl ,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(heroByIdParams)
    });
    return await data.json() ?? [];
  }

  async getHeroesByName(search: string): Promise<Hero[]> {
    const params = { search }
    const data = await fetch(API_URLS.getHeroesByNameUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(params)
    });
    return await data.json() ?? [];
  }

  async addNewHero(heroName: string): Promise<void> {
    const params = {
      heroName
    }
    const data = await fetch(API_URLS.addNewHeroUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(params)
    });
    // return await data.json() ?? [];
  }

  async modifyHero(hero: Hero): Promise<void> {
    const params = { hero }
    const data = await fetch(API_URLS.modifyHeroUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(params)
    });
    // return await data.json() ?? [];
  }

  async deleteHero(id: string): Promise<GetHeroesResponse> {
    const params = { id }
    const data = await fetch(API_URLS.deleteHeroUrl, {
      method: "DELETE", 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(params)
    });
    return await data.json() ?? [];
  }

}
