import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
 
})
export class SearchPokemonComponent implements OnInit {
// Appartient à la classe rxjs Flux de donnée dans le temps des recherches de l'utilisateur
  searchTerms= new Subject<string>(); 
 //Affihcer les résultas qui correspondent à la recherche 
  pokemons$ : Observable<Pokemon[]>

  constructor(private router : Router, private pokemonService : PokemonService){} 
 
 
 
  ngOnInit(): void {
    this.pokemons$ =this.searchTerms.pipe(
      //Eliminer les temps de recherche trop succins
      debounceTime(300),
      //Enlever les requetes qui se répètent
      distinctUntilChanged(),
      switchMap((term)=>this.pokemonService.searchPokemonList(term))
    )
  }

  search(term:string){
    this.searchTerms.next(term)
  }

  goToDetail(pokemon : Pokemon){
    const link = ['/pokemon',pokemon.id]
    this.router.navigate(link)
  }
}
