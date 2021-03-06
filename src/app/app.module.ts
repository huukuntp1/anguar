import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login.service';
import { TrandComponent } from './trand/trand.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherInfoResultComponent } from './weather-info-result/weather-info-result.component';
import { WetherChartComponent } from './wether-chart/wether-chart.component';
import { WeatherService } from './weather.service';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    TrandComponent,
    WeatherComponent,
    WeatherSearchComponent,
    WeatherInfoResultComponent,
    WetherChartComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIcgayYKPPDnRhRPUdgsCi63XC3-VB12k'
    })
  ],
  providers: [LoginService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
