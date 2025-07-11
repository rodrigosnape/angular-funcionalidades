import { Pipe, PipeTransform } from "@angular/core";
import { UserStatusEnum } from "../app.component";

@Pipe({
    name: 'userStatus'
})

export class UserStatusPipe implements PipeTransform{
    transform(userStatus:number):string {
        //Modo simples
        /* if(userStatus === UserStatusEnum.ATIVO){
            return 'Ativo';
        } else if(userStatus === UserStatusEnum.INATIVO){
            return 'Inativo';
        } else {
            return 'Inválido'
        } */
        
        //Modo hard
        const userStatusDescription: { [key:number]:string} = {
            [UserStatusEnum.ATIVO]: 'Ativo',
            [UserStatusEnum.INATIVO]: 'Inativo',
        };
        
        return userStatusDescription[userStatus] ? userStatusDescription[userStatus] : 'Inválido';
    }

}