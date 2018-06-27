import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DriverComponent } from './driver/driver.component';
import { CarComponent } from './car/car.component';
import { FilterPipe } from './filter.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    CarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
