import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
// import Mission from "./mission"
@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  url = 'https://api.spacexdata.com/v3/launches'
  // data: any = [];
  testNumber: any
  flightNumber = new Subject<number>()
  flightNumberToSend$ = this.flightNumber.asObservable()
  constructor(private http: HttpClient) { }

  getMissions() {
    return this.http.get(this.url)
  }

  sendFlightNumber(missionNumber: number) {
    this.testNumber = missionNumber
    console.log("from service " + missionNumber)

    this.flightNumber.next(missionNumber)

  }

}
