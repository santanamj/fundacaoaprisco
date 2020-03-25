import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { ArquivoCreateComponent } from './components/arquivos/arquivo-create/arquivo-create.component';
import { ArquivoListComponent } from './components/arquivos/arquivo-list/arquivo-list.component';
import { ArquivoEditComponent } from './components/arquivos/arquivo-edit/arquivo-edit.component';
import { ArquivoDeleteComponent } from './components/arquivos/arquivo-delete/arquivo-delete.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component:LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'RegistroUser', component: RegistroUserComponent },
  { path: 'criar-arquivo', component: ArquivoCreateComponent },
  { path: 'listar-arquivos', component: ArquivoListComponent },
  { path: 'editar-arquivos', component: ArquivoEditComponent },
  { path: 'delete-arquivos', component: ArquivoDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
