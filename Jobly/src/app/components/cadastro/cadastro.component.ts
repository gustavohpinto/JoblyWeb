import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Endereco, Usuario } from '../../common/models';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  password: string = '';
  rua: string = '';
  cep: string = '';
  numero: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';
  complemento: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  onSubmit() {
    const endereco = new Endereco(this.rua, this.cep, this.numero, this.bairro, this.cidade, this.uf, this.complemento);
    const novoUsuario: Usuario = {
      id: 0,
      nome: this.nome,
      email: this.email,
      senha: this.password,
      endereco: endereco
    };

    this.usuarioService.addUsuario(novoUsuario).subscribe(() => {
      this.showSuccessModal();
    });
  }

  showSuccessModal() {
    const modalElement = document.getElementById('successModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();

      setTimeout(() => {
        modal.hide();
        this.router.navigate(['/']);
      }, 3000); // Modal fica visível por 3 segundos
    }
  }
}
