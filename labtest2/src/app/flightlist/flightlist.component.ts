import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { AppComponent } from "../app.component"
// import { Router } from '@angular/router';
import { SpacexapiService } from "../spacexapi.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css']
})
export class FlightlistComponent implements OnInit {
  title = 'Lab Test 02';
  student = 'Kanta Husari';
  studentNumber = '101217294';
  data: any = [];

  constructor(private service: SpacexapiService, private router: Router) { }

  ngOnInit(): void {

    this.service.getMissions().subscribe(res => {
      this.data = res
    })
  }

  goToPage(pageName: string, missionNumber: number) {
    this.service.sendFlightNumber(missionNumber)
    this.router.navigate([`${pageName}`]);
  }
}
