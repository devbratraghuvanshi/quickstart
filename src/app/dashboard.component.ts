import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeroes().then(heros => this.heroes = heros.splice(1, 5));
    }

}
