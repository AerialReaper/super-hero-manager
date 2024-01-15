import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css'
})
export class AddHeroComponent {
  addHeroFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+[-\s]?[a-zA-Z]+$')]);
  matcher = new ErrorStateMatcher();
  targetHero: Hero = {
    name : '',
    id : '',
  }
  showSpinner: boolean = false;

  constructor(
    private heroService: HeroService,
    private router: Router
    ){}

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  addNewHero(){
    this.showSpinner = true;
    const params = { heroName: this.targetHero.name }
    this.heroService.addNewHero(params).then( () => {
      this.showSpinner = false;
      this.router.navigate(['/see-all-heroes']);
    })
  }
}
