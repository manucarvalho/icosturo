import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IcosturoService } from './service/icosturo.service';
import { DataService } from './service/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BarraMenuComponent } from './app/components/barra-menu/barra-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { PecasComponent } from './app/components/pecas/pecas.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { EntrarDialogComponent } from './app/components/entrar-dialog/entrar-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastrarDialogComponent } from './app/components/cadastrar-dialog/cadastrar-dialog.component';
import { MatRadioModule } from '@angular/material/radio';
import { DetalheModeloComponent } from './app/components/detalhe-modelo/detalhe-modelo.component';
import { HttpClientModule } from '@angular/common/http';
import { CarrinhoComponent } from './app/components/carrinho/carrinho.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { RodapeComponent } from './app/components/rodape/rodape.component';
import { SucessoCompraComponent } from './app/components/sucesso-compra/sucesso-compra.component';
import { ConfirmacaoDialogComponent } from './app/components/confirmacao-dialog/confirmacao-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    PecasComponent,
    EntrarDialogComponent,
    CadastrarDialogComponent,
    DetalheModeloComponent,
    CarrinhoComponent,
    RodapeComponent,
    SucessoCompraComponent,
    ConfirmacaoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    MatTabsModule
  ],
  providers: [IcosturoService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
