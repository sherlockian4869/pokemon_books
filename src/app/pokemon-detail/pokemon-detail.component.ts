import { ChartConfiguration, ChartData, ChartType, LabelItem } from 'chart.js';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { POKEMONS } from '../model/pokemons';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemons = POKEMONS;
  pokemon: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((map) => {
      const id = +map.get('id')!;
      this.pokemon = this.pokemons[id - 1];
    });
    this.radarChartData.datasets.push({
      data: [
        this.pokemon.base.HP,
        this.pokemon.base.Attack,
        this.pokemon.base.Defense,
        this.pokemon.base.Speed,
      ],
      label: this.pokemon.name.japanese + 'の能力値',
    });
  }
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };
  public radarChatrLabels: string[] = ['HP', 'Attack', 'Defense', 'Speed'];
  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChatrLabels,
    datasets: [],
  };
  public radarChartType: ChartType = 'radar';
}
