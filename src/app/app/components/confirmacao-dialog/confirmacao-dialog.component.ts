import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { IcosturoService } from 'src/app/service/icosturo.service';
import { Cliente } from '../cadastrar-dialog/cliente';

@Component({
  selector: 'app-confirmacao-dialog',
  templateUrl: './confirmacao-dialog.component.html',
  styleUrls: ['./confirmacao-dialog.component.css']
})
export class ConfirmacaoDialogComponent implements OnInit {

  cliente = {} as Cliente;

  constructor(private service: IcosturoService, private dataService : DataService) { }

  ngOnInit(): void {
    this.cliente = this.dataService.getCliente();
  }

  cadastrarCliente(){
    
    console.log(this.cliente);
    this.service.tipoCliente(this.cliente).subscribe(() => console.log('cadastro cliente'));
    
  }

}
