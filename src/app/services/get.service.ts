import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetService {
  private pokemons:any;


  constructor(private httpClient: HttpClient) { }

  getPokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    return this.httpClient.get(url);

  }

  getPokemonImage(pokemons:any) : Observable<any> {
      return this.httpClient.get(pokemons)
  }







}
