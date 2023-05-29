import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
})
export class TypePipe implements PipeTransform {
  japanese = {
    Grass: 'くさ',
    Poison: 'どく',
    Fire: 'ほのお',
    Water: 'みず',
    Bug: 'むし',
    Normal: 'ノーマル',
    Flying: 'ひこう',
    Electric: 'でんき',
    Ground: 'じめん',
    Fairy: 'フェアリー',
    Fighting: 'かくとう',
    Psychic: 'エスパー',
    Rock: 'いわ',
    Steel: 'はがね',
    Ice: 'こおり',
    Ghost: 'ゴースト',
    Dragon: 'ドラゴン',
  };

  transform(types: string[], ...args: unknown[]): unknown {
    return types.map((type) => this.japanese[type] || type);
  }
}
