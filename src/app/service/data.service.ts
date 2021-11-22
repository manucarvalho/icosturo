import { Injectable } from '@angular/core';
import { Cliente } from '../app/components/cadastrar-dialog/cliente';
import { Peca } from '../app/components/pecas/pecas-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  peca = {} as Peca;
  cliente = {} as Cliente;
  
  constructor() { }

  setPeca(peca: Peca){
    this.peca = peca;
  }

  getPeca(){
    return this.peca;
  }

  setCliente(cliente: Cliente){
    this.cliente = cliente;
  }

  getCliente(){
    return this.cliente;
  }

  
}
