import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { IcosturoService } from 'src/app/service/icosturo.service';
import { Peca } from './pecas-interface';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.component.html',
  styleUrls: ['./pecas.component.css']
})
export class PecasComponent implements OnInit {
  
  pecas!: Peca [];

  constructor(private router: Router, private dataService : DataService, private service: IcosturoService) { }

  ngOnInit(): void {
    this.getPecas();
  }

  goToDetalhe(peca: Peca){
    this.dataService.setPeca(peca);
    this.router.navigateByUrl('/modelo');
  }

  getPecas(){
    this.service.getPecas().subscribe(res=> this.pecas = res);    
  }  

}
