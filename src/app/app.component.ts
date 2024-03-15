import {Component} from '@angular/core';
import {RollerService} from "./roller.service";
import {RollData} from "./roll-data";
import {DataStorageService} from "./data-storage.service";

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

  constructor(private rollerService: RollerService, private dataStorageService: DataStorageService) {
    if(dataStorageService.isRollDataSaved()){
      let rollData: RollData = dataStorageService.loadRollData();
      this.rollData = rollData;
      this.numberOfDice = rollData.numberOfDice;
    }
  }

  onRollDice(): void {
    let rollData: RollData = this.rollerService.getRollData(this.numberOfDice);
    this.rollData = rollData;
    this.dataStorageService.saveRollData(rollData);
  }

}
