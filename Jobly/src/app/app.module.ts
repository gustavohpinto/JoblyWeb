import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandpageComponent } from './components/landpage/landpage.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContratacaoComponent } from './components/contratacao/contratacao.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ServicoService } from './services/servico.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: LandpageComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  // Outras rotas podem ser adicionadas aqui
];

@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    ServicosComponent,
    ContratacaoComponent,
    SearchBarComponent,
    PerfilComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [RouterModule],
  providers: [ServicoService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
