import { Component, Input, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    .mat-card {
      margin-top: 20px;
    }
  `]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe = {
    id: '',
    superhero: '',
    publisher: Publisher['Other'],
    alter_ego: '',
    first_appearance: '',
    characters: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
