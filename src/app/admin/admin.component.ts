import { Component, OnInit } from '@angular/core';
// import { AdminService } from '../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adm;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    )
     { 
        
     }

  ngOnInit() {}

    onStartButtonClick() {
      
      this.router.navigate(['/admin/adminform'], { relativeTo: this.route })
    }
  

}
