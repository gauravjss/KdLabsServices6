import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService, LoaderState } from './loader.service';


@Component({
    selector: 'app-kd-loader',
    templateUrl: 'loader.component.html'
})

export class LoaderComponent implements OnInit, OnDestroy {

    show = false;
    showText = false;

    private subscription: Subscription;

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.show = state.show;
                this.showText = state.showText || false;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
