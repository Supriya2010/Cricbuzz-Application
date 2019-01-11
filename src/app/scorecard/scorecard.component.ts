import { Component, OnInit } from '@angular/core';
import { Playerlist1Service } from '../services/playerlist1.service';
import { Playerlist2Service } from '../services/playerlist2.service';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  play1;
  play2;
  te;

  constructor(
    player1:Playerlist1Service,
    player2:Playerlist2Service,
    team:TeamService
  )
   {
    this.play1=player1.playerlist11;
    this.play2=player2.Playerlist22;
    this.te=team.teams;
   }

  ngOnInit() {
  }

}
