import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../common/models';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  private currentUser: Usuario | null = null;

  constructor(private usuarioService: UsuarioService) {}

  login(email: string, password: string): Observable<boolean> {
    return this.usuarioService.getUsuarios().pipe(
      map((usuarios: Usuario[]) => {
        const usuario = usuarios.find(u => u.email === email && u.senha === password);
        this.loggedIn = !!usuario;
        this.currentUser = usuario || null;
        return this.loggedIn;
      })
    );
  }

  logout(): void {
    this.loggedIn = false;
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUsuarioLogado(): Usuario | null {
    return this.currentUser;
  }
}
