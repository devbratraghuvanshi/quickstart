import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
  providers: [HeroService]

})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(
              private heroService: HeroService,
              private router: Router
              ) {
    // this.heroes = this.heroService.getHeroes(); // or this
    // this.getHeroes();   
    // they both will work but
    // constructor should not contain complex logic, 
    // especially a constructor that calls a server, such as a data access method, use on OnInit
  };
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  getHeroes(): void {
   this.heroService.getHeroesSlowly().then( heroes => this.heroes = heroes);
  };
  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
}



