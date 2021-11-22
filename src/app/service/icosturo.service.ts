import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../app/components/cadastrar-dialog/cliente';
import { Usuario } from '../app/components/cadastrar-dialog/usuario';
import { Designer } from '../app/components/detalhe-modelo/designer';
import { Peca } from '../app/components/pecas/pecas-interface';

@Injectable({
  providedIn: 'root'
})
export class IcosturoService {

  url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  cadastrar(usuario: Usuario){
    return this.httpClient.post<Usuario>(this.url + 'usuario' , usuario);
  }

  getUltimoId(){
    return this.httpClient.get<Usuario>(this.url + 'usuario/lastId');
  }

  tipoCliente(cliente: Cliente){
    return this.httpClient.post<Cliente>(this.url + 'cliente' , cliente);
  }

  getPecas(){
    return this.httpClient.get<Peca[]>(this.url + 'modelo');
  }

  cadastrarCliente(cliente : Cliente){
    return this.httpClient.post<Cliente>(this.url + 'clientebyid', cliente);
  }

  
}
