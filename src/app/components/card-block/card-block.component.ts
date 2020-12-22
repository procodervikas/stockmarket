import { Component, OnInit, Input } from '@angular/core';
import { CardBlock } from 'src/app/interface/card-block';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})

export class CardBlockComponent implements OnInit {

  @Input() cardBlock: CardBlock;

  constructor() { }

  ngOnInit(){
    console.log(this.cardBlock.roll_no);
  }

}
