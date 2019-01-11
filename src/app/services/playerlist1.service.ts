import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Playerlist1Service {

  playerlist11: Array<string> =[];
  addplayers1(playerlist:Array<string>)
  {
    this.playerlist11=playerlist;
    // console.log(this.playerlist11);
  }

  constructor() { }
}
 