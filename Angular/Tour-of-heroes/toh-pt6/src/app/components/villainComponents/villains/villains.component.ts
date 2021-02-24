import { Component, OnInit } from '@angular/core';

import { Villain } from '../../../interfaces/villain';
import { VillainService } from '../../../services/villain.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./../../css/heroes-villains.css']
})
export class VillainsComponent implements OnInit {

  villains: Villain[];

  constructor(private villainService: VillainService) { }

  ngOnInit(): void {
    this.getVillains();
  }

  getVillains(): void {
    this.villainService.getVillains()
      .subscribe(villains => this.villains = villains);
  }

  add(name: string): void {
    if (!name) return;
    this.villainService.addVillain({ name } as Villain)
      .subscribe(villain => this.villains.push(villain));
  }

  delete(villain: Villain): void {
    this.villains = this.villains.filter(v => v !== villain);
    this.villainService.deleteVillain(villain).subscribe();
  }
}
