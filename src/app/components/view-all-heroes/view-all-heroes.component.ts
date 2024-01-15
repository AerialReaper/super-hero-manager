import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-view-all-heros',
  templateUrl: './view-all-heroes.component.html',
  styleUrl: './view-all-heroes.component.css'
})
export class ViewAllHeroesComponent {
  heroList: Hero[] = [];
}
