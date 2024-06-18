import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servico, Colaborador, Contratacao } from '../common/models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${this.apiUrl}/servicos`);
  }

  getServico(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.apiUrl}/servicos/${id}`);
  }

  getColaborador(id: number): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${environment.apiUrl}/colaboradores/${id}`);
  }

  getContratacoesPorUsuario(usuarioId: number): Observable<Contratacao[]> {
    const url = `${this.apiUrl}/servico?usuarioId=${usuarioId}`;
    console.log('Fetching contracts for user from:', url);
    return this.http.get<Contratacao[]>(url);
  }

  addContratacao(contratacao: Contratacao): Observable<Contratacao> {
    return this.http.post<Contratacao>(`${environment.apiUrl}/servico`, contratacao);
  }
}
