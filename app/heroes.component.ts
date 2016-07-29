import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {HeroDetailComponent} from "./hero-detail.component";
import {Hero} from "./hero";
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
	selector:'my-heroes',
	templateUrl:'app/heroes.component.html',
	styleUrls:['app/css/heroes.component.css'],
	directives: [HeroDetailComponent],
})

export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;
	constructor(
		private router: Router,
		private heroService: HeroService) { }
	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	ngOnInit() {
		this.getHeroes();
	}
	onSelect(hero: Hero) { this.selectedHero = hero; }
	gotoDetail() {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}


