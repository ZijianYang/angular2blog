import { Component,OnInit  } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  // template: `
  // <h1>{{title}}</h1>
  // <h2>My favorite hero is: {{myHero}}</h2>
  // `,
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent  implements OnInit  {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };
  
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}