import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarComponent } from './feature/star/star.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import { CommentComponent } from './feature/comment/comment.component';
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DatePipe} from "@angular/common";
import { ChartComponent } from './feature/chart/chart.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { UserComponent } from './feature/user/user.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    CommentComponent,
    ChartComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    NgxChartsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
