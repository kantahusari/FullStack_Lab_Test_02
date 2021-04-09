import { Component, OnInit, Input } from '@angular/core';
import { SpacexapiService } from "../spacexapi.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-flightdetail',
  templateUrl: './flightdetail.component.html',
  styleUrls: ['./flightdetail.component.css']
})
export class FlightdetailComponent implements OnInit {
  catchFlightNumber: any
  data: any = [];
  missiondetails: any;

  constructor(private service: SpacexapiService, private router: Router) { }

  ngOnInit(): void {
    this.service.getMissions().subscribe(res => {
      this.data = res
      this.catchFlightNumber = this.service.testNumber
      // console.log(this.data[this.catchFlightNumber - 1])
    })
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }


}
