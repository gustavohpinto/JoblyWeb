import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoService } from '../../services/servico.service';
import { AuthService } from '../../services/auth.service';
import { Servico, Colaborador, Usuario, Endereco } from '../../common/models';
import { NgForm } from '@angular/forms';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-contratacao',
  templateUrl: './contratacao.component.html',
  styleUrls: ['./contratacao.component.css']
})
export class ContratacaoComponent implements OnInit {
  rua: string = '';
  cep: string = '';
  numero: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';
  complemento: string = '';
  servico: Servico | undefined;
  colaborador: Colaborador | undefined;
  usuario: Usuario | null = null;
  mensagemSucesso: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private servicoService: ServicoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.usuario = this.authService.getUsuarioLogado();

    if (idParam) {
      const id = +idParam;
      this.servicoService.getServico(id).subscribe(servico => {
        this.servico = servico;
        if (servico && servico.colaboradorId) {
          this.servicoService.getColaborador(servico.colaboradorId).subscribe(colaborador => {
            this.colaborador = colaborador;
          });
        }
      }, error => {
        console.error('Erro ao obter serviço:', error);
      });
    } else {
      console.error('ID do serviço não fornecido na URL');
    }
  }

  onSubmit(contratacaoForm: NgForm) {
    if (contratacaoForm.valid) {
      if (this.servico && this.colaborador && this.usuario) {
        const precoAleatorio = this.getRandomPrice(100, 1000);
        const endereco = new Endereco(this.rua, this.cep, this.numero, this.bairro, this.cidade, this.uf, this.complemento);
        const novaContratacao = {
          id: 0,
          usuarioId: this.usuario.id,
          servicoId: this.servico.id,
          colaboradorId: this.colaborador.id,
          data: new Date().toISOString(),
          endereco: endereco,
          status: "Em andamento",
          preco: precoAleatorio
        };

        this.servicoService.addContratacao(novaContratacao).subscribe(() => {
          this.mensagemSucesso = true;
          this.showSuccessModal();
        });
      }
    } else {
      console.log('Formulário inválido');
    }
  }

  showSuccessModal() {
    const modalElement = document.getElementById('successModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();

      setTimeout(() => {
        modal.hide();
        this.navigateHome();
      }, 3000); // Modal fica visível por 3 segundos
    }
  }

  private getRandomPrice(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
