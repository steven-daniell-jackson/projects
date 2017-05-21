import { Injectable } from '@angular/core';
import {Http, Response}  from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { TasksList } from './tasks-list';


@Injectable()
export class TaskapiService {

 constructor(private http: Http) { }

tasksData(res:Response){
	
	return res.json();
}

getTasks(): Observable<TasksList[]>{
	return this.http.get('https://stevenjackson2017.herokuapp.com/api').map(this.tasksData);
} 

}
