import {Component, OnInit} from '@angular/core';
import {GetService} from "../services/get.service";
import {Pokemon} from "../models/pokemon";


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  isShiny:boolean = true;
  responseResult : any;

  constructor(private service: GetService) {
  }

  isShinyChange():void {

    this.isShiny = !this.isShiny;

  }

  ngOnInit() {

     this.service.getPokemon().subscribe(response => {

          this.responseResult = response;

          for (const pokemon of this.responseResult.results) {

              this.service.getPokemonData(pokemon.url).subscribe((response) => {
                pokemon.data = response;
              });

          }

     });

  }


}
