import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentryService {

  balls;
  overs;
  discription;
  addCommentry(balls:any,overs:any,discription:string)
  {
     this.balls=balls;
     this.overs=overs;
     this.discription=discription;
     console.log(this.balls,this.overs,this.discription);
  }
  constructor() { }
}
