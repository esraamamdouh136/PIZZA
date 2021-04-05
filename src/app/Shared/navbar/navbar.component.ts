import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/core/services/pizza.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  AddCart : Array<any> = []
  constructor(public PizzaService: PizzaService) {
    this.AddCart = this.PizzaService.AddPizza;
   }

  ngOnInit(): void {
    this.PizzaService.getItemFromCart(this.AddCart)
  }

  delete(index) {
      this.AddCart.splice(index, 1);
}
}
