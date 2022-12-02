import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //Angular lit les routes du haut vers le bas
  
  {path:'', redirectTo :'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  //Opérateur ** ->tjrs le déclarer en dernier
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  //Route racine déclarée ici
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
