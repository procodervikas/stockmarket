import { Injectable } from '@angular/core';
import { CardBlock } from 'src/app/interface/card-block'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 
  datablocks : CardBlock []; 
  
  constructor() { }

  addCard() {
    this.datablocks.push
    const data: CardBlock = {
      name: "Vikas Kumar",
      roll_no: 1726527,
      branch: "IT",
      passout: true
    }
    return data;
  }
}
