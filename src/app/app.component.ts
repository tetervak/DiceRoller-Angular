import {Component} from '@angular/core';
import {RollerService} from "./roller.service";
import {RollData} from "./roll-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  rollData: RollData;

  constructor(private rollerService: RollerService) {
    this.rollData = rollerService.getRollData(3);
  }

  onRollDice(numberOfDice: number) {
    this.rollData = this.rollerService.getRollData(numberOfDice);
  }

  protected readonly parseInt = parseInt;
}
