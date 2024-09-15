import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dice-display',
  templateUrl: './dice-display.component.html',
  styleUrl: './dice-display.component.css'
})
export class DiceDisplayComponent {

  @Input() diceValues: number[] = [];
}
