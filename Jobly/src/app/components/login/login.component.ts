import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit() {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      const usuario = usuarios.find(u => u.email === this.email && u.senha === this.senha);
      if (usuario) {
        alert('Login realizado com sucesso!');
        this.router.navigate(['/home']);
      } else {
        alert('Email ou senha incorretos.');
      }
    });
  }
}
