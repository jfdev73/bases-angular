import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      id: '1',
      name: 'Trunks',
      power: 9000,
    },
  ];

  @Output()
  onDeleteCharacterById: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id: string): void {
    console.log(id);
    this.onDeleteCharacterById.emit(id);
  }
}
