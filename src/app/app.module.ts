import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ScorecardComponent } from './scorecard/scorecard.component';
import { CommentryComponent } from './commentry/commentry.component';
import { AdminComponent } from './admin/admin.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminSummaryComponent } from './admin/admin-summary/admin-summary.component';
import { AdminTeamsComponent } from './admin/admin-teams/admin-teams.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    ScorecardComponent,
    CommentryComponent,
    AdminComponent,
    AdminFormComponent,
    AdminSummaryComponent,
    AdminTeamsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
