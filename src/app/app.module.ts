import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeViewComponent } from './animals/views/home-view/home-view.component';
import { NewadoptionComponent } from './animals/components/newadoption/newadoption.component';
import { AdoptionallComponent } from './animals/components/adoptionall/adoptionall.component';
import { AdoptiontabComponent } from './animals/components/adoptiontab/adoptiontab.component';
import { AdoptioncardsComponent } from './animals/components/adoptioncards/adoptioncards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeViewComponent,
    NewadoptionComponent,
    AdoptionallComponent,
    AdoptiontabComponent,
    AdoptioncardsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
