import { Injectable } from '@angular/core';
import { Team } from '../models/Team';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teams: Array<Team> = [];
  constructor() {}
  
    score (team1:String,team2:String,toss:String,date:Date,overs:Number){
      this.teams.push(new Team(team1,team2,toss,date,overs))
    }
  
}
