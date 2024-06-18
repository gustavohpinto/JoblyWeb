import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ServicoService } from '../../services/servico.service';
import { Servico } from '../../common/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicos: Servico[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private servicoService: ServicoService
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    } else {
      this.servicoService.getServicos().subscribe(servicos => {
        this.servicos = servicos.sort((a, b) => b.avaliacao - a.avaliacao).slice(0, 5);
      });
    }
  }

  goToProfile(): void {
    this.router.navigate(['/perfil']);
  }
}