import {Component} from '@angular/core';
import {RollData} from "./roll-data";
import {DataStorageService} from "./data-storage.service";
import {RollingDataService} from "./rolling-data.service";
import {Subscription} from "rxjs";
import {LoadingState} from "./loading-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // the result values
  rollData: RollData | undefined;

  private rollDataSub: Subscription | undefined;

  loadingState: LoadingState = LoadingState.INITIAL;

  // the input value
  numberOfDice: number = 3;

  constructor(private rollingDataService: RollingDataService, private dataStorageService: DataStorageService) {
    if (dataStorageService.isRollDataSaved()) {
      let rollData: RollData = dataStorageService.loadRollData();
      this.rollData = rollData;
      this.loadingState = LoadingState.SUCCESS;
      this.numberOfDice = rollData.numberOfDice;
    }
  }

  onRollDice(): void {
    this.loadingState = LoadingState.LOADING;
    this.rollDataSub = this.rollingDataService
      .getRollData(this.numberOfDice)
      .subscribe({
        next: rollData => {
          this.rollData = rollData;
          this.loadingState = LoadingState.SUCCESS;
          this.dataStorageService.saveRollData(rollData);
          this.rollDataSub?.unsubscribe();
        },
        error: () => {
          this.loadingState = LoadingState.ERROR;
          this.rollDataSub?.unsubscribe();
        }
      });
  }

  protected readonly LoadingState = LoadingState;
}
