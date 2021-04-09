import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightdetailComponent } from './flightdetail/flightdetail.component';
import { FlightlistComponent } from './flightlist/flightlist.component';


const routes: Routes = [
  { path: "", component: FlightlistComponent },
  { path: "flightdetail", component: FlightdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FlightlistComponent, FlightdetailComponent]
