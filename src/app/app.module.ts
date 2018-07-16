import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DriverComponent } from './driver/driver.component';
import { CarComponent } from './car/car.component';
import { FilterPipe } from './filter.pipe';
import {FormsModule} from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    CarComponent,
    FilterPipe,
    CapitalizePipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
