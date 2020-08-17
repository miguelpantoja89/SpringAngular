import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpringConsumerService } from "src/app/services/spring-consumer.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { MyChartComponent } from './components/my-chart/my-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersComponent,
    RegistrerComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SpringConsumerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
