import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import {LoaderService} from './loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private loaderTextUrls = ['Cars'];

  constructor(private loader: LoaderService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.show(this.loaderTextUrls[0]);
    return next.handle(req).pipe(
      finalize(() => {
        this.loader.hide();
      })
    );
  }

}
