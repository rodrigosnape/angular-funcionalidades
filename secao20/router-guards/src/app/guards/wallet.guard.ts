import { inject } from "@angular/core";
import { CanActivateFn, GuardResult, MaybeAsync } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const walletGuard = (): CanActivateFn => {
    return (): MaybeAsync<GuardResult> => {
        console.log('walletGuard');
        const authService = inject(AuthService);

        const WALLET_ACTIVE = authService.getUserWalletStatus() === 'active';
        if(WALLET_ACTIVE){
            return true;
        } else {
            return false;
        }

    }
}