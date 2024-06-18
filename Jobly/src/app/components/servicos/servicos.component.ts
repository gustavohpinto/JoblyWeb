import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../../services/servico.service';
import { Servico } from '../../common/models';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  servicos: Servico[] = [];

  constructor(private servicoService: ServicoService) {}

  ngOnInit(): void {
    this.servicoService.getServicos().subscribe(servicos => {
      this.servicos = servicos;
    });
  }
}

