import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'super-hero-manager';
  heroList: Hero[] = [];
}
