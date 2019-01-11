import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
@ViewChild('team1')team1inf :ElementRef;
@ViewChild('team2')team2inf :ElementRef;
@ViewChild('toss')tossinf :ElementRef;
@ViewChild('date')dateinf : ElementRef;
@ViewChild('overs')oversinf :ElementRef;

tm1;
tm2;
  constructor( 
    private teamService:TeamService,
    private router: Router,
    private route: ActivatedRoute) { 
   
  }

  ngOnInit() {
  }

  onDefineButtonClick(){
    this.teamService.score(
      (<HTMLInputElement>this.team1inf.nativeElement).value,
      (<HTMLInputElement>this.team2inf.nativeElement).value,
      (<HTMLInputElement>this.tossinf.nativeElement).value,
      (<HTMLInputElement>this.dateinf.nativeElement).valueAsDate,
      (<HTMLInputElement>this.oversinf.nativeElement).valueAsNumber

    )

    this.router.navigate(['/admin/adminteam'],{relativeTo:this.route})
  }

    myfun()
    {
      this.tm1=(<HTMLInputElement>this.team1inf.nativeElement).value;
      this.tm2=(<HTMLInputElement>this.team2inf.nativeElement).value;
    }
  }

