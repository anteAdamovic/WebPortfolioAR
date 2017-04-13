import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AnteComponent } from './ante/ante.component';
import { RebekaComponent } from './rebeka/rebeka.component';

const appRoutes: Routes = [
  { path: 'ante', component: AnteComponent },
  { path: 'rebeka', component: RebekaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AnteComponent,
    RebekaComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
