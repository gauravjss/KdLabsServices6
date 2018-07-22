import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    FilterPipe,
    CapitalizePipe,
    DashboardComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
