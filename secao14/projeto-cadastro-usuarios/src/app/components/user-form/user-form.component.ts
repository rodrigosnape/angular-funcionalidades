import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { convertPtBrDateToDateObj } from '../../utils/convert-pt-br-date-to-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToPtBrDate } from '../../utils/convert-date-obj-to-pt-br-date';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges{

  passwordStrengthValue = 0;

  dateValue: Date | null = null;
  minDate: Date | null = null;
  maxDate: Date | null = null;

  filteredGenresList: GenresListResponse = [];

  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  @Output('onFormSubmit') onFormSubmitEmitt = new EventEmitter<void>();

  constructor(
    private readonly _le: ElementRef
  ){}

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
     //console.log('ngOnChanges');
     //console.log('changes', changes);
     const USER_CHANGED = changes['userSelected'];
     if(USER_CHANGED){
      this.onPasswordChange(this.userSelected.password);    
      this.setBirthDateToDatepicker(this.userSelected.birthDate);

      this.filteredGenresList = this.genresList;
     }

  }

  onPasswordChange(password:string){
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }

  onDateChange(event: MatDatepickerInputEvent<any,any>) {
    if(!event.value){
      return
    }
    this.userSelected.birthDate = convertDateObjToPtBrDate(event.value);

    console.log('this.userSelected',this.userSelected);
  }

  displayFn(genreId: number){

    const genreFound = this.genresList.find(genre => genre.id === genreId);

    return genreFound ? genreFound.description : '';
  }

  filterGenres(text:string){
    console.log(text);
    if(typeof text === 'number') return;
    const searchTerm = text.toLocaleLowerCase();

    this.filteredGenresList = this.genresList.filter(genre => genre.description.toLowerCase().includes(searchTerm));
  }

  isAnyCheckboxChecked(): boolean {
    return this.userSelected.musics.some(music => music.isFavorite );
  }

  onFormSubmit(form: NgForm) {
    //console.log(form);

    if(form.invalid){
      this.focusOnInvalidControl(form);
      return
    }

    console.log('VÁLIDO');
    this.onFormSubmitEmitt.emit();

  }

  focusOnInvalidControl(form: NgForm) {
    //console.log(Object.keys(form.controls));
    for (const control of Object.keys(form.controls)){
      console.log(control);
      if(form.controls[control].invalid){
        const invalidControl: HTMLElement = this._le.nativeElement.querySelector(`[name=${control}]`);

        invalidControl.focus();

        break;
      }
    }
  }

  private setMinAndMaxDate(){
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }

  private setBirthDateToDatepicker(birthDate: string){
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }

  
}
