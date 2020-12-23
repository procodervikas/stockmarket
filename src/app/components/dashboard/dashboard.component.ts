import { Component, OnInit } from '@angular/core';
import { CardBlock } from 'src/app/interface/card-block';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datablocks: CardBlock[];

  constructor() { }

  ngOnInit(): void {
    this.datablocks = [];
  }

  addCard() {
    this.datablocks.push({
      order_type:'Long',
      atr_value: 45,
      entry_price: 45000 ,
      calculated_price: 47000
    });
  }

  clearCards() {
    this.datablocks.length - 1;
  }
}
