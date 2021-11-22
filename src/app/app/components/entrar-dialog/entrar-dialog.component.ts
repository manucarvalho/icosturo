import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-entrar-dialog',
  templateUrl: './entrar-dialog.component.html',
  styleUrls: ['./entrar-dialog.component.css']
})
export class EntrarDialogComponent implements OnInit {

  hide = true;
  
  formEntrar = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    senha: [null, Validators.required]
  })  

  getErrorMessage() {
    if (this.formEntrar.controls['email'].hasError('required')) {
      return 'Você deve informar seu e-mail.';
    }

    return this.formEntrar.controls['email'].hasError('email') ? 'E-mail inválido' : '';
  }

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
  } 

  
}
