import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandpageComponent } from './components/landpage/landpage.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ContratacaoComponent } from './components/contratacao/contratacao.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LandpageComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'contratacao/:id', component: ContratacaoComponent, canActivate: [AuthGuard] },
  { path: 'servicos', component: ServicosComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] }
];


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', 
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
