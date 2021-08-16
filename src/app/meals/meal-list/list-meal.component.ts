import { Component } from "@angular/core";
import { MealService } from "src/app/service/mealservice";

@Component({
    selector: 'meal-list',
    templateUrl: './list-meal.component.html',
    styleUrls:['./list-meal.component.scss']
})

export class MealListComponent{
    byname ='';byid='';byletter='';

    constructor(
        private mealser : MealService
    ){}
   
namelist(){
    this.mealser.getMealList().subscribe(result =>{
        console.log(result);

    })
    
}
idlist(){

}
letterlist(){

}

}