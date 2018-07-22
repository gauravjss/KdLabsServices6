import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface LoaderState {
    show: boolean;
    showText?: boolean;
}

declare let native: any;

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
    /**
     * Number of pending requests
     * @private
     */
    private _pendingRequests = 0;

    private loaderSubject = new Subject<LoaderState>();

    loaderState = this.loaderSubject.asObservable();

    isInIframe = true;

    constructor() {
    }

    show(showText) {
        this._pendingRequests++;
        if (1 === this._pendingRequests) {
            try {
                native.showLoading();
            } catch (e) {
                if (this.isInIframe) {
                    this.addLoaderToParent(showText);
                } else {
                    this.loaderSubject.next(<LoaderState>{show: true, showText: showText});
                }
            }
        }
    }

    hide() {
        this._pendingRequests--;
        if (0 === this._pendingRequests) {
            try {
                native.hideLoading();
            } catch (e) {
                if (this.isInIframe) {
                    this.removeLoaderFromParent();
                } else {
                    this.loaderSubject.next(<LoaderState>{show: false});
                }
            }
        }
    }

    addLoaderToParent(showText) {
        try {
            const elem = `<style>
                    .loader-wrapper {
                        position: fixed;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        overflow: hidden;
                        background: rgba(255, 255, 255, 0.8);
                        opacity: 1;
                        z-index: 1001;
                    }
                    .loader-wrapper .loader-dialog {
                        max-width: 60%;
                        height: 100%;
                        margin: auto;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        -webkit-box-pack: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        color: #fff;
                        opacity: 1;
                        overflow: hidden;
                    }
                    .loader-wrapper .loader-dialog .loading-image {
                        width: 74px;
                        height: 74px;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA6CAYAAAAX8s+wAAAAAXNSR0IArs4c6QAABJdJREFUeAHtm0tsTUEYgP9WsSCIjUeElcSrXiUhIrogIWLBxoaQEmLDRrxCJGVlJSHiUTZWIhFJ0wS1sLBo41WEEJGgDQsJ9Ui8ovX9557TnJ4zc+7pPb1u2zuTTGfO///3P/98d2bOzJzbChkg6ZHI4r8ihypElhHSmG6RDuqNw0Xq54p8LnWYxFLaBJCKB8AgioPkYYZoPiDcskCk2aD7b6KSg7ovsovWnklqMUF+rxSpBtabJLti6rh/6dJjkSlAOJEvAnrdaIbl+Xx2xdSXFNQfkY0KIWUDV9H7pqa07Xezqv7yyDwzk0avwt9cekk7ZctCkVvUEZsTullWpeEjao/4nUHliXggjMPfOnKNCrB/QG5kyHbaPpNWnhkUQVUB6SjlAW7q+aPupYcit5+K1FXnwPnS4hTEsLpL5CL3nhzcQeMA1Ht02yB3I5AXUmYeegqJGx8mx6AT6MpfIk3PREaYgkP/3CS3yWz2DMmF6BrJPZACHypTndoEskLKTKDoMToUtCclpeqfIntNBqyRrvCNfzfpDLLmRZZhh49L2Me+qJCPKt8mJOpbNRMouvrKPAF60fCNrjGFNY9FJbp9Jl1YpjBZS+0Iy4I6PWUSPnCVnNRGbZOt7NpMoHDLojlVstoxd5zFw3EyKwBj+kCQG2xrKCBafRu8MV0WljKBIkh9uqVJVjt8dDOkjtBjluLoOtcfyUxt8pryJJPbbCBZV+XYWH1HA6OxHVFZ2uukcZ3GR0saIxrTms8OGPewWZ/PLqrncy94oHxBPjaqC18TQ6fahmV9qWfqUf466XaeG34jyPo8NgWr8d1F3p/CwQG1TWFnNMkEiht3MzTq8MxyyZgU0laAvjVq+0nIPHeO+1i3OKpTmyy3w0f2pOskXQL4TzedXNtx3EquLzakcPQ81dZyz53EwbTnLTbvUz/HRVPYztUdgdITSBx6DKmJP1inMJF16BMD44Inw9I3NVsERlCPRUZxBHIS19tD7ttYS2yaLwK/8ktGUEyKF0ARhhSQaWexMme6yNdAMJhLOsQUOoQeHNb67bjD/nOfbq2i7YqB8vdD76OGwTXDcDdPslPB9WAtfUgUMj7Shk/AmheFRbt7J8gl7p2YpPAx+JPfk6KQtGHjfV2vRppAJe6dAJmo7+V9YF/UJoQX08VALcjth9osTv6wgLtm0Q1pcQwUPaZLn260Otpz6JGyh1Wubbsy2EDdSQg4potN5sGHX/G29hsvHnVO0uGmPWkIQZK+TuZWUAGwoVz6sFItD4YyB9c2R8ARcAQcAUfAEXAEHIEBQMBbmT8UWcFWZTMXbZw1naEs2yPf4DthQzuB19Xe7yJGcrhXBaRp7ONuYjCSUrjWdDpXlO/f3yJXaf1yJUB9cSVwZpCBlkvUORZ3CQ49B5Rar+RI5S5YvHfyDLlfnLtcdpg8Ag0hDg3eHMUuWt+6LAPSS+aotyGDsq7y448lCqCG36OWNQjXeEfAEXAEHAFHwBFwBBwBR8ARcAQcAUfAEchCgJ8oPuGYgROG8km0+ZhmU4s5tzMnzqbqOPbk6Lh8Eu21/pvIP7zx8KLOwSMfAAAAAElFTkSuQmCC) no-repeat;
                        -webkit-animation: rotate 1.5s linear infinite;
                        animation: rotate 1.5s linear infinite;
                        margin-bottom: 24px;
                    }
                    .loader-wrapper .loader-dialog p {
                        font-size: 16px;
                        line-height: 20px;
                        color: #000;
                    }
                    @keyframes rotate {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                    @-webkit-keyframes rotate {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                    @-ms-keyframes rotate {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                    .loading-text {
                        vertical-align:middle;
                        text-align:center;
                        color:#000000;
                        font-size: 18pt;
                        font-weight: bold;
                    }
                </style>
                <div class="loader-wrapper" role="dialog" tabindex="-1" aria-live="assertive">
                    <div class="loader-dialog" role="document">
                        <div class="loading-image"></div>
                        ${showText ? '<p class="loading-text">Loading Awesome Cars Please wait...</p>' : '<p class="loading-text">Please wait...</p>'}
                    </div>
                </div>`;
            const parentDocument = window.parent.document;
            const body = parentDocument.body;
            const parentModal = parentDocument.createElement('div');
            parentModal.id = 'parentModal';
            parentModal.innerHTML = elem;
            body.appendChild(parentModal);
            body.style.overflow = 'hidden';
        } catch (e) { }
    }

    removeLoaderFromParent() {
        try {
            const parentModal = window.parent.document.getElementById('parentModal');
            window.parent.document.body.removeChild(parentModal);
            window.parent.document.body.style.overflow = 'auto';
        } catch (e) {}
    }
}
