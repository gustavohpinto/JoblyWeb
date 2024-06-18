import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborador } from '../common/models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private apiUrl = `${environment.apiUrl}/colaboradores`;

  constructor(private http: HttpClient) {}

  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.apiUrl);
  }

  getColaborador(id: number): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${this.apiUrl}/${id}`);
  }

  addColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.apiUrl, colaborador);
  }

  updateColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.put<Colaborador>(`${this.apiUrl}/${colaborador.id}`, colaborador);
  }

  deleteColaborador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
