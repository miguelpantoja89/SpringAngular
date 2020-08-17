import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { MyChartComponent } from "./components/my-chart/my-chart.component";

const routes: Routes = [
   {path:"consume",component:DisplayUsersComponent},
   {path:"register",component:RegistrerComponent},
   {path:"dashboard", component:MyChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
