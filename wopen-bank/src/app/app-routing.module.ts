import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { AuthGuard } from 'auth.guard';

//cria paths e compenents que serão renderizados quando o path for chamado.
const routes: Routes = [
    {path: 'cadastro-clientes', component: CadastroClientesComponent},
    {path: 'home-logada', component: HomeLogadaComponent, canActivate: [AuthGuard]},
    {path: '', component: ContentComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
