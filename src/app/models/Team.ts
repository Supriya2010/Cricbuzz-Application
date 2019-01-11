export class Team{
    team1 : String;
    team2 : String;
    toss : String;
    date : Date;
    overs : Number;  

    constructor(team1 : String,team2 : String,toss : String,date :Date, overs : Number){
        this.team1 = team1;
        this.team2 = team2;
        this.toss = toss;
        this.date = date;
        this.overs = overs; 
    }
}