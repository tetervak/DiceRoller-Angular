import {Component} from '@angular/core';
import {RollerService} from "./roller.service";
import {RollData} from "./roll-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // the result values
  rollData: RollData | undefined;

  // the input value
  numberOfDice: number = 3;

  constructor(private rollerService: RollerService) {
  }

  onRollDice(): void {
    this.rollData = this.rollerService.getRollData(this.numberOfDice);
  }

}
