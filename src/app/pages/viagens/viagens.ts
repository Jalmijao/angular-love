import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viagens',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './viagens.html',
  styleUrl: './viagens.scss'
})
export class Viagens {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  cards = [
    {
      title: 'João Pessoa',
      subtitle: 'Bar do cuscuz',
      image: './assets/images/joao pessoa.jpeg',
      description: 'Foi muito foda ir pra joao pessoa etc'
    },
    {
      title: 'Rio de Janeiro',
      subtitle: 'Cristo Redentor',
      image: './assets/images/rj.jpeg',
      description: 'Ver o cristo e a vista foi inesquecível'
    },
    
    {
      title: 'Ubatuba',
      subtitle: 'Centro Histórico',
      image: './assets/images/ubatuba.jpeg',
      description: 'Lugares lindos e clima romântico'
    },
    {
      title: 'Noronha',
      subtitle: 'Centro Histórico',
      image: './assets/images/noronha.jpeg',
      description: 'Lugares lindos e clima romântico'
    },
    {
      title: 'Paraty',
      subtitle: 'Centro Histórico',
      image: './assets/images/paraty.jpeg',
      description: 'Lugares lindos e clima romântico'
    }
  ];

}
