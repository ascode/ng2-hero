import { Component , OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: `./dashboard.component.html`
})
export class DashBoardComponent implements OnInit {

    heroes: Hero[];

    constructor(private heroService: HeroService) {
        
    }

    ngOnInit() {
        this.heroService.getHeros()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}