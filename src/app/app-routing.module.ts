import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonModule } from './pokemon/pokemon.module';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PokemonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
