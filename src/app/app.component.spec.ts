import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FilterComponent} from './filter/filter.component';
import {CarComponent} from './car/car.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from './service/loader';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, DashboardComponent, FilterComponent, CarComponent, FilterPipe, CapitalizePipe, LoaderComponent
      ], imports: [AppRoutingModule, FormsModule, HttpClientModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    }).compileComponents();
  }));
  it('should create the app', async( () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  /*it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to KdLabsServices6!');
  }));*/
});
