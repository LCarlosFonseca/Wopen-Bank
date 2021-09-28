import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

//cria paths e compenents que serão renderizados quando o path for chamado.
const routes: Routes = [
    {path: 'cadastro', component: ContentComponent},
    {path: '', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
