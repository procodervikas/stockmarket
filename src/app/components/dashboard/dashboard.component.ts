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
      name: "vikas kumar",
      roll_no: 1726527,
      branch: "IT",
      passout: true
    })
  }
  // this.CardBlock.push({
  // blockHash: Math.random()
  //   .toString(36)
  //   .substring(2),
  // CardBlock : this.CardBlock.length + 1,
  // previousBlock: "0000",
  // // title:"IBM",
  // market_cap: "112.14B" 
  // transactions: [
  //   {
  //     sender: "sender",
  //     recipient: "recipient",
  //     amount: 1,
  //     fee: 200
  //   }
  // ]
  //   });
  // }

  clearCards() {
    this.datablocks.length - 1;
  }
}
