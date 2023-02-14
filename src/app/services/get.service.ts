import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private httpClient: HttpClient) { }

  getPokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    return this.httpClient.get(url);
  }

  getPokemonData(args:any) : Observable<any> {
      return this.httpClient.get(args)
  }


}
