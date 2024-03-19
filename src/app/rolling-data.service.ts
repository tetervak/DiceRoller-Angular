import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RollData} from "./roll-data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RollingDataService {

  private static dataUrl: string = 'http://localhost:8080/api/roll-dice';

  constructor(private http: HttpClient) { }

  getRollData(numberOfDice: number): Observable<RollData> {
    return this.http.get<RollData>(RollingDataService.dataUrl, {params: {numberOfDice: numberOfDice}})
  }
}
