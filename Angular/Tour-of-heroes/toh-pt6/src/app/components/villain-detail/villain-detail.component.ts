import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import {Villain} from '../../interfaces/villain';
import {VillainService} from '../../services/villain.service';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.css']
})
export class VillainDetailComponent implements OnInit {

  villain: Villain;

  constructor(
    private route: ActivatedRoute,
    private villainService: VillainService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVillain();
  }


  
  getVillain(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.villainService.getVillain(id)
      .subscribe(villain =>{ 
        this.villain = villain;
        this.setAge();
      });    

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.villainService.updateVillain(this.villain)
      .subscribe(() => this.goBack());
  }

  setAge(): void {
    if (this.villain.birthday == undefined) {
      this.villain.age = "unknown";
    } else {
      let birthday: Date = new Date(this.villain.birthday);
      let diff: number = Date.now() - birthday.getTime();
      let age: number = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      this.villain.age = age.toString();
    }
  }
}


