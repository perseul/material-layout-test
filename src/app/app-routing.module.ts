import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { PieChartComponent } from './components/template/charts/pie-chart/pie-chart.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  }, {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "pie-chart",
    component: PieChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
