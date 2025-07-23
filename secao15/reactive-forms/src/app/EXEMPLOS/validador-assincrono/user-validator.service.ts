import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { map, Observable, of } from "rxjs";
import { UsersService } from "./users.services";

@Injectable({
    providedIn: 'root',
})
export class UserValidatorService implements AsyncValidator {
    constructor(private readonly _usersService: UsersService){}

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        if(!control.dirty){
          return of(null);  
        } 
        return this._usersService.getUsers().pipe(
            map((usersList) => {
                const hasUser = usersList.find((user) => user.name.toLocaleLowerCase() === control.value.trim().toLocaleLowerCase() );
                if(hasUser) {
                    return null;
                }

                return { userValidator: true };
            }),
        )    
    }

}