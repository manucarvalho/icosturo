import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Usuario } from '../cadastrar-dialog/usuario';
import { Peca } from '../pecas/pecas-interface';
import { Costureiro } from './costureiro';
import { Designer } from './designer';

@Component({
  selector: 'app-detalhe-modelo',
  templateUrl: './detalhe-modelo.component.html',
  styleUrls: ['./detalhe-modelo.component.css']
})
export class DetalheModeloComponent implements OnInit {

  url = 'http://localhost:8080/';

  peca = {} as Peca;
  designer = {} as Designer;
  usuario = {} as Usuario;
  costureiros = [] as Costureiro [];

  constructor(private router: Router, private dataService : DataService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.peca = this.dataService.getPeca();
    this.getDesignerDoModelo(this.peca.modeloId);
    this.getCostureiroDoModelo(this.peca.modeloId);
  }

  goToCarrinho(){
    this.router.navigateByUrl('/carrinho');
  }

  getDesignerDoModelo(id: number){
    this.httpClient.get<Designer>(this.url + 'modelo/' + id + '/designer').subscribe(res => this.usuario = res.usuario);
    
  }

  getCostureiroDoModelo(id: number){
    this.httpClient.get<Costureiro[]>(this.url + 'modelo/' + id + '/costureiros').subscribe(res => this.costureiros = res);
  }
}
