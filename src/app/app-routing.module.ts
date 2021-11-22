import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './app/components/carrinho/carrinho.component';
import { DetalheModeloComponent } from './app/components/detalhe-modelo/detalhe-modelo.component';
import { PecasComponent } from './app/components/pecas/pecas.component';
import { SucessoCompraComponent } from './app/components/sucesso-compra/sucesso-compra.component';

const routes: Routes = [
  {path:'', component: PecasComponent},
  {path: 'modelo', component: DetalheModeloComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'sucesso', component: SucessoCompraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
