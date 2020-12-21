import { Component, OnInit } from '@angular/core';
// import {} from './app/data.ts'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  CardBlock = [];

  constructor() { }

  ngOnInit(): void {
    this.CardBlock = [];
  }

  addCard() {
    this.CardBlock.push({
      // blockHash: Math.random()
      //   .toString(36)
      //   .substring(2),
        CardBlock : this.CardBlock.length + 1,
        previousBlock: "0000",
        // title:"IBM",
        market_cap: "112.14B" 
      // transactions: [
      //   {
      //     sender: "sender",
      //     recipient: "recipient",
      //     amount: 1,
      //     fee: 200
      //   }
      // ]
    });
  }

  clearCards() {
    this.CardBlock.length - 1;
  }
}
