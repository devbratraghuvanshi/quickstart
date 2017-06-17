import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
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
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  };
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}
}



