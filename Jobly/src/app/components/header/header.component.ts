import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems = [
    { icon: '../../../assets/icons/reforma.png', label: 'Reforma e reparos' },
    { icon: 'assets/icons/assistencia.png', label: 'Assistência técnica' },
    { icon: 'assets/icons/auto.png', label: 'Auto e mecânicos' },
    { icon: 'assets/icons/saude.png', label: 'Saúde e cuidados' },
    { icon: 'assets/icons/eventos.png', label: 'Eventos e festas' },
    { icon: 'assets/icons/online.png', label: 'Serviços online' },
    { icon: 'assets/icons/casa.png', label: 'Casa e domésticos' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
