import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import { FilterComponent } from './filter/filter.component';
import {LoadingInterceptor} from './service/loader/loading-interceptor';
import {LoaderComponent} from './service/loader';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    FilterPipe,
    CapitalizePipe,
    DashboardComponent,
    FilterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
