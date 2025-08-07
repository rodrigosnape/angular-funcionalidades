import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { finalize, Observable, tap } from "rxjs";
import { LoadingService } from "../services/loading.service";

export function loadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>{
    
    const loadingService = inject(LoadingService);

    loadingService.showLoading();

    return next(req).pipe(
        tap( () => console.log('tap load')),
        finalize( () => {
            console.log('finalize');
            loadingService.hideLoading();
        })
    );
}