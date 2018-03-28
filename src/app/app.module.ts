import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomRoutingModule } from './routing/custom-routing.module';
import { CheckLoginService } from './services/check-login.service';
import { UtilityService } from './services/utility.service';
import { GameService } from './services/http-request/http-utility-services/game.service';
import { LoginService } from './services/http-request/http-utility-services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    DetailComponent,
    LoginComponent,
    HeaderComponent,
    ListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [CustomRoutingModule, CheckLoginService, UtilityService, GameService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
