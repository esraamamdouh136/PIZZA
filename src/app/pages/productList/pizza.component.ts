import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { pizza } from 'src/app/core/module/pizza';
import { PizzaService } from 'src/app/core/services/pizza.service'


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  public ELEMENT_DATA: pizza[];
  displayedColumns: string[] = ['code', 'name', 'image', 'price', 'type', 'quantity', 'action'];
  dialogRef;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(public dialog: MatDialog, public PizzaService: PizzaService) { }
  ngOnInit(): void {
    this.PizzaService.getJSON().subscribe(data => {
      this.ELEMENT_DATA = data
    });
  
  }


  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '550px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }


  addRowData(row_obj) {
    var d = new Date();
    this.ELEMENT_DATA.push({
      code: d.getTime(),
      name: row_obj.name,
      image: row_obj.image,
      price: row_obj.price,
      type: row_obj.type,
      quantity: row_obj.quantity


    });
    this.table.renderRows();

  }
  updateRowData(row_obj) {
    this.ELEMENT_DATA = this.ELEMENT_DATA.filter((value, key) => {
      if (value.code == row_obj.code) {
        value.name = row_obj.name;
        value.image = row_obj.image;
        value.price = row_obj.price;
        value.type = row_obj.type;
        value.quantity = row_obj.quantity;
      }
      return true;
    });
  }
  deleteRowData(row_obj) {
    this.ELEMENT_DATA = this.ELEMENT_DATA.filter((value, key) => {
      return value.code != row_obj.code;
    });
  }



}



