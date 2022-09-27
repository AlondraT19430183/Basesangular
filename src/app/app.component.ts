import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public titulo:string = 'Contador APP1';
  public numero:number=15;
  public base:number=120;

  acumula(valor:number):void{
    this.numero+=valor;
  }

  
}

