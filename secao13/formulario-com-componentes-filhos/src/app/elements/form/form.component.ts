import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterViewInit {
  inputText: string = 'Texto inicial.';
  textarea: string = 'Descrição inicial.';
  select: string = '1';
  radioButton: string = '1';
  checkbox: boolean = true;

  @ViewChild('meuForm') meuForm!: NgForm;
  @ViewChild('meuInput') meuInput!: NgModel;

  ngAfterViewInit() {
    this.meuForm.valueChanges?.subscribe(
      (value) => {
        console.log('Form change', value);
      }
    );

    this.meuInput.valueChanges?.subscribe((value: string) => {
      console.log('Input changes', value);
    });
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit ', form.value);

    // form.value['nome'] = 'Texto Alterado';
    // console.log(this.inputText);
  }

  onReset(form: NgForm) {
    console.log(this.inputText);
    return;
    
    form.reset();

    console.log('onReset', form.value);

    console.log(this.inputText);
    console.log(this.textarea);
    console.log(this.select);
    console.log(this.radioButton);
    console.log(this.checkbox);

    setTimeout(() => console.log(form.value), 1000);
  }
}
