import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  public character: Character = {} as Character;

  emitCharacter(): void {
    console.log(this.character);

    if (this.character.name.trim().length === 0) return;
    this.onNewCharacter.emit({ ...this.character });

    this.character = {} as Character;
  }
}
