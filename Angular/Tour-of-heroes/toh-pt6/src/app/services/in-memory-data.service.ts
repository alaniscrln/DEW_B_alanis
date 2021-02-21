import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', birthday: "1992-01-12", age: 0, description: "bla bla bla", avatar:"https://comps.canstockphoto.es/negro-h%C3%A9roe-s%C3%BAper-caricatura-hombre-clip-art-vectorial_csp68129366.jpg", color: "#61e864" },
      { id: 12, name: 'Narco', birthday: "1994-05-04", age: 0, description: "baaaaaaaaaaaa", avatar:"xsssaa", color: "#a242d6" }/*,
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }*/
    ];
    const villains = [
      { id: 13, name: 'Wawawiwa', birthday: "1982-12-02", age: 0, description: "bla bla bla", avatar:"aaaaaa", color: "#61e864" },
      { id: 14, name: 'Capitán Tristeza', birthday: "1999-05-04", age: 0, description: "bsssaaaaaaa", avatar:"xaaaaa", color: "#a242d6" }

    ];
    return {heroes, villains};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
