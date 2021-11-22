import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { CadastrarDialogComponent } from '../cadastrar-dialog/cadastrar-dialog.component';
import { EntrarDialogComponent } from '../entrar-dialog/entrar-dialog.component';


@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {  

  constructor(public dialog: MatDialog) {}

  openEntrar() {
    this.dialog.open(EntrarDialogComponent);
  }

  openCadastrar() {
    this.dialog.open(CadastrarDialogComponent);
  }

  ngOnInit(): void {
    
  }

}
