import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { MealListComponent } from './meals/meal-list/list-meal.component';
const routes: Routes = [
  { path:'meal-list', component:MealListComponent },
  { path: '',redirectTo : 'meal-list', pathMatch:'full'},
  { path: '**',redirectTo : 'meal-list'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
