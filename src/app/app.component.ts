import {Component} from '@angular/core';
import {RollData} from "./roll-data";
import {DataStorageService} from "./data-storage.service";
import {RollingDataService} from "./rolling-data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // the result values
  rollData: RollData | undefined;

  rollDataSub: Subscription | undefined;

  // the input value
  numberOfDice: number = 3;

  constructor(private rollingDataService: RollingDataService, private dataStorageService: DataStorageService) {
    if(dataStorageService.isRollDataSaved()){
      let rollData: RollData = dataStorageService.loadRollData();
      this.rollData = rollData;
      this.numberOfDice = rollData.numberOfDice;
    }
  }

  onRollDice(): void {
    this.rollDataSub = this.rollingDataService
      .getRollData(this.numberOfDice)
      .subscribe(rollData => {
        this.rollData = rollData;
        this.dataStorageService.saveRollData(rollData);
        this.rollDataSub?.unsubscribe();
      });
  }

}
