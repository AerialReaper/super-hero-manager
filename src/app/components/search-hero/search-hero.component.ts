import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent {

  @Output()
  heroResultEmiter : EventEmitter<Hero[]> = new EventEmitter<Hero[]>();
  
  constructor(private heroService: HeroService) {}

  public search: string = '';

  public submit(): void {
    if(this.search){
      const params = { search: this.search };
      this.heroService.getHeroesByName(params).then( (res: Hero[] ) => {
        this.sendInfoToMosaic(res);
      });
    }
  }

  private sendInfoToMosaic(result: Hero[]): void {
    this.heroResultEmiter.emit(result);
  }
}
