import { Component, OnInit } from '@angular/core';
import { pizza } from 'src/app/core/module/pizza';
import { PizzaService } from 'src/app/core/services/pizza.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  ELEMENT_DATA: pizza[];

  constructor(
    public PizzaService: PizzaService , 
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.PizzaService.getJSON().subscribe(data => {
      this.ELEMENT_DATA = data
    });
  }

  AddtoCard(code:number , name:string , image:string  , price:number ) {
    this.toastr.success( name , 'success You Added ' , {
      timeOut: 3000,
      closeButton	: true
    })
    let ProductaddedtoCard = {
      code: code,
      name: name,
      image: image,
      price: price,
    }
    this.PizzaService.addItem(ProductaddedtoCard)
  }

 
}
