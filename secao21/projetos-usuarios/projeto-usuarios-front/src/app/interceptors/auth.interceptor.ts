import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn):Observable<HttpEvent<unknown>>{

    console.log('authInterceptor',authInterceptor);
    console.log('req',req);

    //É obrigatório clonar uma requisição para adicionar um header
    const newReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token')),
    });


    return next(newReq);
}