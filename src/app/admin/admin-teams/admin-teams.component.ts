import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { Playerlist1Service } from 'src/app/services/playerlist1.service';
import { Playerlist2Service } from 'src/app/services/playerlist2.service';
@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {
 @ViewChild('player1')player1inf:ElementRef;
//  @ViewChild('profile')profileinf:ElementRef;
 @ViewChild('player2')player2inf:ElementRef;
//  @ViewChild('profile2')profile2inf:ElementRef;


 playerlist:Array<string> =[];

 playerlist1:Array<string> =[];
 
  tem;

  teamlimit=1;
  teamlimit1=1;

 
  constructor( 
    teamservice : TeamService,
    private playerls:Playerlist1Service,
    private playerls1: Playerlist2Service,
    private router: Router,
    private route:ActivatedRoute
  
    ) {
      this.tem=teamservice.teams;
     }

  ngOnInit() {
  }
  onSubmitButtonClick(){
    this.router.navigate(['/admin/adminsummary'], { relativeTo: this.route })
  }
  onAddButtonClick(){
   this.teamlimit++;
   if(this.teamlimit<=11){
   this.playerlist.push((<HTMLInputElement>this.player1inf.nativeElement).value);
  //  this.prof.push((<HTMLInputElement>this.profileinf.nativeElement).value);
  }
}
  onAddButtonClick1(){
    this.teamlimit1++;
    if(this.teamlimit1<=11){
    this.playerlist1.push((<HTMLInputElement>this.player2inf.nativeElement).value);
    // this.prof1.push((<HTMLInputElement>this.profile2inf.nativeElement).value);
    //console.log(this.playerlist1);
   }
  }

   onDeleteButtonClick(){
    this.playerlist.pop();
    // this.prof.pop();
   }
   onDeleteButtonClick1(){
    this.playerlist1.pop();
    // this.prof1.pop();
   }

   onAddTeamsButtonClick(){
     this.playerls.addplayers1(this.playerlist); 
   }
   
   onAddTeam2ButtonClick(){
     this.playerls1.addplayer2(this.playerlist1);
   }
}
