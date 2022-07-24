import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    //this.heroesService.getHeroes().subscribe(
    //  resp => this.heroes = resp
    //);
  }

  buscando(): void {
    this.heroesService.getSugerencias(this.termino.trim()).subscribe(
      resp => this.heroes = resp
    );
  }

  opcionSeleccionada(evento: MatAutocompleteSelectedEvent) {
    if (!evento.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = evento.option.value; 
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id!).subscribe(
      resp => this.heroeSeleccionado = resp
    );
  }

}
