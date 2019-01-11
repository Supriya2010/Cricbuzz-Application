import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CommentryComponent } from './commentry/commentry.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminTeamsComponent } from './admin/admin-teams/admin-teams.component';
import { AdminSummaryComponent } from './admin/admin-summary/admin-summary.component';

const routes: Routes = [{ path: '', redirectTo: 'header', pathMatch: 'full' },
{
  path: 'admin',
  component: AdminComponent,
  children:[
    { path: 'adminform',component: AdminFormComponent},
    { path: 'adminteam',component: AdminTeamsComponent},
    { path: 'adminsummary',component: AdminSummaryComponent}
  ]
},
{
  path: 'scorecard',
  component: ScorecardComponent
 },
{
  path: 'commentry',
  component: CommentryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
