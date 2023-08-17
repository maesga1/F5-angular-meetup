import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './animals/views/login/login.component';
import { AccessformComponent } from './animals/components/accessform/accessform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccessformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
