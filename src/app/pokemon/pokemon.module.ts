import { NgChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { TypePipe } from '../pypes/type.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon.component';

const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonComponent,
    children: [
      { path: '', component: PokemonListComponent },
      {
        path: ':id',
        component: PokemonDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    TypePipe,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgChartsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [],
})
export class PokemonModule {}
