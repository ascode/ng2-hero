import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashBoardComponent } from './dashboard.component';

import { HeroService } from './hero.service';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashBoardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashBoardComponent
  ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
