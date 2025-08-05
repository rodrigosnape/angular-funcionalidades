import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { catchError, map } from "rxjs";

export const authGuard = (): CanActivateFn => {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
        console.log('authGuard');

        const authService = inject(AuthService);
        const router = inject(Router);

        return authService.verifyToken().pipe(
            catchError( () => {
               return router.navigate(['login']);
            }),
            map(() => {
                return true
            })
        );
    }
}