import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 9000,
    },
  ];

  addCharacter(character: Character): void {
    console.log('Main Page');
    console.log({ object: character });
    const newCharacter = { ...character, id: uuid() };
    this.characters.push(character);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
