import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  suma(a:number, b:number){
    console.log(a+b);
  }
  
  resta(a:number, b:number){
    console.log(a-b);
  }

}
