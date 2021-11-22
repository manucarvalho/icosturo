import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Costureiro } from '../detalhe-modelo/costureiro';
import { Peca } from '../pecas/pecas-interface';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  url = 'http://localhost:8080/';

  peca = {} as Peca;
  costureiros = [] as Costureiro [];

  formEndereco = this.formBuilder.group({
    destinatario: [null, Validators.required],
    rua: [null, Validators.required],
    num: [null, Validators.required],
    complemento: [null],
    CEP: [null, Validators.required],
    bairro: [null, Validators.required],
    cidade: [null, Validators.required],
    estado: [null, Validators.required],
  })

  formCartao = this.formBuilder.group({
    num: [null],
    nome: [null],
    validade: [null],
    codSeg: [null]
  })

  tamanho ?: string;
  costureiro ?: string;

  constructor(private router: Router, private dataService : DataService, private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.peca = this.dataService.getPeca();
    console.log(this.peca);
    this.getCostureiroDoModelo(this.peca.modeloId);
  }

  getCostureiroDoModelo(id: number){
    this.httpClient.get<Costureiro[]>(this.url + 'modelo/' + id + '/costureiros').subscribe(res => this.costureiros = res);
  }

  goToSucesso(){
    this.router.navigateByUrl('/sucesso');
  }
}
