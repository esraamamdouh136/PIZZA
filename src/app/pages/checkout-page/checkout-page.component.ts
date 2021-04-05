import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/core/services/pizza.service'

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  // displayedColumns: string[] = ['code','name', 'image', 'price'];
  Checkout : Array<any> = []
  constructor(public PizzaService: PizzaService) { 
    this.Checkout = this.PizzaService.getItem;
  }

  ngOnInit(): void {
  }

}
