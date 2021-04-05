import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { AddItem } from '../module/AddItem';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  AddPizza : AddItem[] = [];
  getItem : AddItem[] = [];


  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
    });
    
}
public getJSON(): Observable<any> {
  return this.http.get("./assets/json/pizza.json");
}

addItem(_AddPizza) {
  this.AddPizza.push(_AddPizza);
}
getItemFromCart(_getItem){
  this.getItem.push(_getItem);
}
}
