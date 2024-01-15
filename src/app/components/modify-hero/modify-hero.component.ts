import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-modify-hero',
  templateUrl: './modify-hero.component.html',
  styleUrl: './modify-hero.component.css'
})
export class ModifyHeroComponent implements OnInit, ErrorStateMatcher {

  modifyHeroFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z\s]+-?[a-zA-Z\s]+$')]);
  matcher = new ErrorStateMatcher();
  targetHero: Hero = {
    name : '',
    id : '',
  }
  showSpinner: boolean = false;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getAllHeroes();
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  getAllHeroes(): void {
    this.route.paramMap.subscribe( (params: ParamMap ) => {
      const heroServiceParams = {
        id : params.get('id'),
      }
      this.heroService.getHeroById(heroServiceParams).then((res: Hero ) => {
        this.targetHero = res;
      });
    })
  }

  modifyHero(){
    this.showSpinner = true;
    this.heroService.modifyHero(this.targetHero).then( (res: void ) => {
      this.showSpinner = false;
      this.router.navigate(['/see-all-heroes']);
    })
  }
}
