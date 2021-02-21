import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero =>{ 
        this.hero = hero;
        this.setAge();
      });    

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  setAge(): void {
    if (this.hero.birthday == undefined) {
      this.hero.age = "unknown";
    } else {
      let birthday: Date = new Date(this.hero.birthday);
      let diff: number = Date.now() - birthday.getTime();
      let age: number = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      this.hero.age = age.toString();
    }
  }
}
