import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Route, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { MovieService } from './movie.svc';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'single/:id',
    component: SingleComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }