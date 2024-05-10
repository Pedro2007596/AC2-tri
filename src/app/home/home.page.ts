import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  precoproduto = 0;
  desconto = 0;
  valordesconto=0;
  valorFinal=0;
  constructor() {}
  calcularGorjeta() {
  this.valordesconto= this.precoproduto * (this.desconto / 100);
  this.valorFinal=this.precoproduto-this.valordesconto
  }
}
