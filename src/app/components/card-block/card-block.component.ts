import { Component, OnInit, Input } from '@angular/core';
import { CardBlock } from 'src/app/interface/card-block';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})

export class CardBlockComponent implements OnInit {

  // @Input() cardBlock: CardBlock;
  datablocks:CardBlock[];
  constructor() { }

  ngOnInit(){
    //  console.log(this.cardBlock.atr_value);
  }

  addCard() {
    this.datablocks.push({
      order_type:'Long',
      atr_value: 45,
      entry_price: 45000 ,
      calculated_price: 47000
    });
  }

}
