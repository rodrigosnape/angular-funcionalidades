import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dependents-list-edit',
  templateUrl: './dependents-list-edit.component.html',
  styleUrl: './dependents-list-edit.component.scss'
})
export class DependentsListEditComponent {

  @Input( {required: true} ) userForm!: FormGroup;

  @Output('onRemoveDependent') onRemoveDependentEmitt = new EventEmitter<number>();

  get dependentsList(): FormArray {
    return this.userForm.get('dependentsList') as FormArray;
  }

  removeDependent(dependentIndex: any) {
    this.onRemoveDependentEmitt.emit(dependentIndex);
  }  
}
