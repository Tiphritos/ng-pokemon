import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center'>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemon" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `,
  
})
export class PageNotFoundComponent {

}
