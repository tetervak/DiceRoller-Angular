import { Injectable } from '@angular/core';
import {RollData} from "./roll-data";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private static readonly key: string = "dice-values";
  saveRollData(rollData: RollData): void {
    localStorage[DataStorageService.key] = JSON.stringify(rollData.values);
  }

  loadRollData(): RollData{
    let values: number[] = JSON.parse(localStorage[DataStorageService.key]);
    return {
      values: values,
      total: values.reduce((a: number, b: number) => a + b, 0),
      numberOfDice: values.length
    };
  }

  isRollDataSaved(): boolean{
    return localStorage.getItem(DataStorageService.key) != null;
  }
}
