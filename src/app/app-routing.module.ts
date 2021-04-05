import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './pages/cards/cards.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { PizzaComponent } from './pages/productList/pizza.component';

const routes: Routes = [
  {path : "" , component : PizzaComponent},
  {path : "pizza-list" , component : PizzaComponent},
  {path : "store" , component : CardsComponent},
  {path: "checkout" , component : CheckoutPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
