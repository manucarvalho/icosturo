import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { IcosturoService } from 'src/app/service/icosturo.service';
import { ConfirmacaoDialogComponent } from '../confirmacao-dialog/confirmacao-dialog.component';
import { Cliente } from './cliente';
import { Usuario } from './usuario';

@Component({
  selector: 'app-cadastrar-dialog',
  templateUrl: './cadastrar-dialog.component.html',
  styleUrls: ['./cadastrar-dialog.component.css']
})
export class CadastrarDialogComponent implements OnInit {

  hide = true;
  cliente = {} as Cliente;
  usuario = {} as Usuario;

  formUsuario = this.formBuilder.group({
    perfil: [null, Validators.required],
  })

  formCadastrar = this.formBuilder.group({
    nome: [null, Validators.required],
    sobrenome: [null, Validators.required],
    telefone: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  })

  getErrorMessage() {
    if (this.formCadastrar.controls['email'].hasError('required')) {
      return 'Você deve informar seu e-mail.';
    }

    return this.formCadastrar.controls['email'].hasError('email') ? 'E-mail inválido' : '';
  }

  constructor(private formBuilder: FormBuilder,
    private service: IcosturoService,
    public dialog: MatDialog,
    private dataService : DataService) { }

  ngOnInit(): void {
  }

  cadastrar(form: FormGroup){
    this.service.cadastrar(form.value).subscribe(res => this.cliente.usuario = res);    
  }

  cadastrarCliente(){
    if(this.formUsuario.controls['perfil'].value == 'Cliente'){
      console.log('entrou');
      console.log(this.cliente);
      this.service.tipoCliente(this.cliente).subscribe(() => console.log('cadastro cliente'));
    }else{
      console.log('nao entrou');
    }
  }

  openConfirmacao() {
    this.dataService.setCliente(this.cliente);
    this.dialog.open(ConfirmacaoDialogComponent);
  }
  
}


