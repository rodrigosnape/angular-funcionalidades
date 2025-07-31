import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesList } from '../../types/countries-list';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { StatesList } from '../../types/states-list';
import { maritalStatusArray } from '../../utils/marital-status-description-map';

@Component({
  selector: 'app-general-informations-edit',
  templateUrl: './general-informations-edit.component.html',
  styleUrl: './general-informations-edit.component.scss'
})
export class GeneralInformationsEditComponent implements OnInit,  OnChanges{

  countriesListFiltered: CountriesList = [];
  statesListFiltered: StatesList = [];
 
  @Input( {required: true} ) userForm!: FormGroup;
  @Input( {required: true} ) countriesList: CountriesList = [] ;
  @Input( {required: true} ) statesList: StatesList = [] ;

  @Output('onCountrySelect') onContrySelectEmmitt = new EventEmitter<string>();
  
  ngOnInit() {
    //console.log(this.userForm);

    this.watchCountryFormChangesAndfilter();

    this.watchStateFormChangesAndFilter();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes',changes);
    this.countriesListFiltered = this.countriesList;
    this.statesListFiltered = this.statesList;
  }

  get maritalStatusArray() {
    return maritalStatusArray;
  }

  get emailControl(): FormControl {
    return this.userForm.get('generalInformations.email') as FormControl;
  }

  get countryControl(): FormControl {
    return this.userForm.get('generalInformations.country') as FormControl;
  }

  get stateControl(): FormControl {
    return this.userForm.get('generalInformations.state') as FormControl;
  }

  onCountrySelected(event: MatAutocompleteSelectedEvent) {
    //console.log(event.option.value);
    this.onContrySelectEmmitt.emit(event.option.value);
  }
  
  private watchCountryFormChangesAndfilter() {
    //O feijão com arroz
    /* this.countryControl.valueChanges.subscribe((value:string) => this.filterContriesList(value)); */
    //Mais estiloso e com menos código
    this.countryControl.valueChanges.subscribe(this.filterContriesList.bind(this));
  }

  private watchStateFormChangesAndFilter() {   
      this.stateControl.valueChanges.subscribe(this.filterStatesList.bind(this));
  }

  private filterContriesList(searchTerm: string) {
    if(!searchTerm) return;
     //console.log('searchTerm',searchTerm);
     this.countriesListFiltered = this.countriesList.filter((country) => country.name?.toLowerCase().includes(searchTerm?.toLowerCase().trim()))
  }
  
  private filterStatesList(searchTerm: string) {
     if(!searchTerm) return;
     //console.log('searchTerm',searchTerm);
     this.statesListFiltered = this.statesList.filter((state) => state.name?.toLowerCase().includes(searchTerm?.toLowerCase().trim()))
  }
}
