import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelComponent } from './excel/excel.component';
import { FooterComponent } from './includes/footer/footer.component';
import { BarChartsComponent } from './Ng2-Charts/bar-charts/bar-charts.component';
import { MainComponent } from './pages/main/main.component';
import { BarCComponent } from './set_charts/bar-c/bar-c.component';
import { PieChartComponent } from './set_charts/pie-chart/pie-chart.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'bar', component: BarCComponent },
  { path: 'pie', component: PieChartComponent },
  { path: 'bar-charts', component: BarChartsComponent },
  { path: 'excel', component: ExcelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
