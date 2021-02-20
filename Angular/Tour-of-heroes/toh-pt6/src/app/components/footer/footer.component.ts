import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  alumno : string = "Alanis Carolina Simoes Villalonga";
  asignatura : string = "Desarrollo Web en Entorno Cliente, DAW";
  curso : string = "Curso 2020/2021";

  constructor() { }

  ngOnInit(): void {
  }

}
