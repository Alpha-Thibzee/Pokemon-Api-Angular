import {Component, OnInit} from '@angular/core';
import {GetService} from "../services/get.service";


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit{
  pokemons:any;
  image:any;
  isShiny:boolean|null = true ;
  constructor(private service:GetService) {}

  isShinyChange(){

    this.isShiny = !this.isShiny;
    console.log(this.isShiny)

  }

  ngOnInit() {

      this.service.getPokemon().subscribe(response => {

          this.pokemons = response;

          for (const pokemon of this.pokemons.results) {
            this.service.getPokemonImage(pokemon.url).subscribe(response => {
                 // console.log(response.sprites.other.home.front_default);
              pokemon.data = response;
            });
          }

      });





  }



}
