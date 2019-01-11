import { Component, OnInit } from '@angular/core';
import { CommentryService } from '../services/commentry.service';

@Component({
  selector: 'app-commentry',
  templateUrl: './commentry.component.html',
  styleUrls: ['./commentry.component.css']
})
export class CommentryComponent implements OnInit {

  // comentry;

  // constructor(
  //   private commen:CommentryService
  // ) { this.comentry=commen.balls,this.comentry=commen.overs,this.comentry=commen.discription}


 balls;
overs;
description;

constructor(ball:CommentryService,over:CommentryService,description:CommentryService) 
{ 
this.balls=ball.balls;
this.overs=over.overs;
this.description=description.discription;
console.log(this.balls);
}

  ngOnInit() {
  }

}
