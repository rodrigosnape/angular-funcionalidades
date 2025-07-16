import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterViewInit{
  @ViewChild('meuForm') form!: NgForm;

  inputText: string ='texto inicial';
  textarea: string = 'Descrição Inicial'
  select: string = '1';
  radioButton: string = '1';
  checkbox: boolean = false;

  ngAfterViewInit() {
    console.log(this.form)
  }

  onSubmit(form: NgForm){
     console.log('onSubmit()',form.value);

     //form.value['nome'] = 'Rodrigo Veiga';
      //console.log(this.inputText);
  }

  onReset(form: NgForm){
     console.log('onReset())',this.inputText);
     return;

    form.reset();
     console.log('onReset())',form.value);
     
     console.log('onReset())',this.inputText);
     console.log('onReset())',this.textarea);
     console.log('onReset())',this.select);
     console.log('onReset())',this.radioButton);
     console.log('onReset())',this.checkbox);

     setTimeout(() => console.log(form.value),1000);


  }
}
