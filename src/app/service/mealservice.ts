import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        Accept: '*/*',
        'Content-Type' : 'application/json'
    })
};

@Injectable()

export class MealService{
    constructor(
        private http : HttpClient,
    ) { }


    getMealList(){
       return this.http.post(environment.themealUrl+"/api/json/v1/1/search.php?s=Arrabiata",httpOptions)
    }


}