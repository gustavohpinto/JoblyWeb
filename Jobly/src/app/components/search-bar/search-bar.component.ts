import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ServicoService } from '../../services/servico.service';
import { Servico } from '../../common/models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';
  services: Servico[] = [];
  uniqueServices: Servico[] = [];
  filteredServices: Servico[] = [];

  constructor(private servicoService: ServicoService, private authService: AuthService,) {}

  ngOnInit(): void {
    this.servicoService.getServicos().subscribe((services) => {
      this.services = services;
      this.removeDuplicates();
    });
  }

  onSubmit(): void {
    if (this.searchTerm) {
      this.search.emit(this.searchTerm)
      this.filteredServices = this.services.filter((service) =>
        service.nome.toLowerCase().includes(this.searchTerm.toLowerCase())       
      );
    } else {
      this.filteredServices = [];
    }
    
  }

  handleSearch() {
    if (!this.authService.isLoggedIn()) {
      alert('Você precisa fazer login para pesquisar serviços.');
    }
  }

  removeDuplicates(): void {
    const uniqueNames = new Set();
    this.uniqueServices = this.services.filter(service => {
      const isDuplicate = uniqueNames.has(service.nome);
      uniqueNames.add(service.nome);
      return !isDuplicate;
    });
  }

  onQuickSearch(name: string): void {
    this.searchTerm = name;
    this.onSubmit();
  }

  onViewDetails(serviceId: number): void {
    // Adicione aqui a lógica para exibir os detalhes do serviço
  }
}
