import { Component, OnInit } from '@angular/core';
import { TaskapiService } from '../taskapi.service';
import { TasksList } from '../tasks-list';

@Component({
  selector: 'app-task-data',
  template: `
<table class="table table-striped">
    <thead>
      <tr>
        <th>Client</th>
        <th>Platform</th>
        <th>URL</th>
        <th>WorK Done</th>
        <th>Date (m/y)</th>
      </tr>
      </thead>
    <tbody>
      <tr *ngFor="let task of tasks | slice:0:10 ;">
        <td>{{task.clientName}}</td>
        <td>{{task.platform}}</td>
        <td>{{task.url}}</td>
        <td><a href="{{task.platform}}">{{task.platform}}</a></td>
        <td>{{task.workDone}}</td>
        <td>{{task.monthFilter}} {{task.yearFilter}}</td>
        </tbody>
  </table>
`,
  styleUrls: ['./task-data.component.css'],
  providers: [TaskapiService]
})
export class TaskDataComponent implements OnInit {
tasks: TasksList[];
  constructor(private service: TaskapiService) { }

  ngOnInit() {
  this.service.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}
