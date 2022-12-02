import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const pokemonRoutes: Routes = [
  //Angular lit les routes du haut vers le bas Plus la route est spécifique plus elle est en haut
  {path :'edit/pokemon/:id', component: EditPokemonComponent, canActivate:[AuthGuard]},
  {path :'pokemon/add', component:AddPokemonComponent, canActivate:[AuthGuard]},
  {path:'pokemon',component:ListPokemonComponent, canActivate:[AuthGuard] },
  {path:'pokemon/:id', component:DetailPokemonComponent, canActivate:[AuthGuard]},
 
 
  
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
   RouterModule.forChild(pokemonRoutes)
  ],
  //Injection de dépendance plus précis
  providers:[PokemonService]
})
export class PokemonModule { }