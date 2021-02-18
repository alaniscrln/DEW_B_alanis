import { Component, OnInit } from '@angular/core';
import { MathService} from '../math.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {

  constructor(public m:MathService) { }

  ngOnInit(): void {
    this.m.suma(5,1);
    this.m.resta(7,1);
  }

}
