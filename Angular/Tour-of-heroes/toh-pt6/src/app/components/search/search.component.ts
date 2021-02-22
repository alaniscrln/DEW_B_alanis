import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

import { Villain } from '../../interfaces/villain';
import { VillainService } from '../../services/villain.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  villains$: Observable<Villain[]>;

  private searchTerms = new Subject<string>();

  constructor(
    private heroService: HeroService,
    private villainService: VillainService
  ) { }

  ngOnInit(): void {
    this.searchHeroes();
    this.searchVillains();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  searchHeroes(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  searchVillains(): void{
    this.villains$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.villainService.searchVillains(term)),
    );
  }



}
