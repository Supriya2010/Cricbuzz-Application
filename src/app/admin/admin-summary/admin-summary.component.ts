import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Playerlist1Service } from 'src/app/services/playerlist1.service';
import { Playerlist2Service } from 'src/app/services/playerlist2.service';
import { CommentryService } from 'src/app/services/commentry.service';

@Component({
  selector: 'app-admin-summary',
  templateUrl: './admin-summary.component.html',
  styleUrls: ['./admin-summary.component.css']
})
export class AdminSummaryComponent implements OnInit {
@ViewChild('possibleRuns')possibleRunsinf:ElementRef;
@ViewChild('Wicket') wicketTypeinf:ElementRef;
tm1;
tm2;

teamlist1;
teamlist2;

ball=0;
over=0;
discription;

public showWicket:boolean = false;
public showCatchBy:boolean = false;
public buttonName:any = 'ShowType';
public buttonName1:any = 'Show';

  constructor(
    private playerlist1:Playerlist1Service,
    private playerlist2:Playerlist2Service,
    private commentry:CommentryService
  ) { 
    this.teamlist1=playerlist1.playerlist11;
    this.teamlist2=playerlist2.Playerlist22;
    console.log(this.teamlist1);
  }

  ngOnInit() {
  }
  onSelectOfPossibility()
{
this.tm1=((<HTMLInputElement>this.possibleRunsinf.nativeElement).value);
if(this.tm1 == 'Wicket')
{
this.showWicket = true;

}
else
{
this.showWicket=false;
}

}

onSelectOfWicket()
{
this.tm2=((<HTMLInputElement>this.wicketTypeinf.nativeElement).value);
console.log(this.tm2);
if(this.tm2=='Catch' || this.tm2=='Stumping') {

this.showCatchBy = true;

} else {
this.showCatchBy = false;
}

}
onAddScoreClicked(){
  if(
  this.ball<6
  ){
  this.ball++;
}
  else if(
    this.ball=6
  ){
  this.ball=0;
  this.over++;
}

this.commentry.addCommentry(this.ball,this.over,this.discription)
}


}




