import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './appModules/mat.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';
import { Comp3Component } from './pages/comp3/comp3.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BarCComponent } from './set_charts/bar-c/bar-c.component';
import { PieChartComponent } from './set_charts/pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartsComponent } from './Ng2-Charts/bar-charts/bar-charts.component';
import { ExcelComponent } from './excel/excel.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    BarCComponent,
    PieChartComponent,
    BarChartsComponent,
    ExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatModule,
    MatGridListModule,
    NgxChartsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
