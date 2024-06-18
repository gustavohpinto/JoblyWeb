import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario, Contratacao } from '../../common/models';
import { ServicoService } from '../../services/servico.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: Usuario | null = null;
  contratacoes: Contratacao[] = [];

  constructor(
    private authService: AuthService,
    private servicoService: ServicoService
  ) {}

  ngOnInit(): void {
    this.usuario = this.authService.getUsuarioLogado();
    if (this.usuario) {
      console.log('Usuário logado:', this.usuario);
      this.servicoService.getContratacoesPorUsuario(this.usuario.id).subscribe(contratacoes => {
        console.log('Contratações recebidas:', contratacoes);
        this.contratacoes = contratacoes;
      });
    }
  }
}