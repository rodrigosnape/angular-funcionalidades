import { HttpContextToken, HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export const AUTH_TOKEN_ENABLED = new HttpContextToken<boolean>( () => true)

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn):Observable<HttpEvent<unknown>>{

/*     console.log('authInterceptor',authInterceptor);
    console.log('req',req);
    console.log('userAuth', req.headers.get('useAuth'));
    console.log('context', req.context.get(AUTH_TOKEN_ENABLED)); */

    let newReq = req;

    const APLY_AUTH_TOKEN = req.context.get(AUTH_TOKEN_ENABLED);

    if(APLY_AUTH_TOKEN){
        newReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token')),
        });
    }

    return next(newReq)
    // Executado apenas no response da requisição
    .pipe(
        tap((event) => {
            if (event.type === HttpEventType.Sent) {
                console.log('Sent');
            }

            if (event.type === HttpEventType.UploadProgress) {
                console.log('UploadProgress');
            }

            if (event.type === HttpEventType.ResponseHeader) {
                console.log('ResponseHeader');
            }

            if (event.type === HttpEventType.DownloadProgress) {
                console.log('DownloadProgress');
            }

            if (event.type === HttpEventType.Response) {
                console.log('Response');
            }
        })
    );

}