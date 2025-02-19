import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';


const routes: Routes = [
    {
      path: '',//rota vazia
      redirectTo: "ListarPensamentos",//redirecionamento da rota vazia para  listar pensamento
      pathMatch:"full"//ele lê toda a url, já o prefix lê apenas a porta (localhost:4200/)
    },
    {
        path: 'CriarPensamento',//rota
        component: CriarPensamentoComponent//conteúdo da rota
    },
    {
        path: 'ListarPensamentos',//rota
        component: ListarPensamentosComponent//conteúdo da rota
    },
    {
        path: 'pensamentos/excluirPensamento/:id',//rota
        component: ExcluirPensamentoComponent//conteúdo da rota
  },
    {
        path: 'pensamentos/editarPensamento/:id',//rota
        component: EditarPensamentoComponent//conteúdo da rota
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
