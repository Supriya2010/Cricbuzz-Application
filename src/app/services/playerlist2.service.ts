import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Playerlist2Service {
 
  Playerlist22:Array<string> =[];

  addplayer2(playerlist1 :Array<string>){
       this.Playerlist22 = playerlist1;
      //  console.log(this.Playerlist22);
  }
  constructor() { }
}
