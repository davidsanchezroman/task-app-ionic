import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  tasks: Task[] = [
    {
      id: '1',
      title: 'Ejemplo',
      description: 'Este es un ejemplo de tarea',
      items:[
        {name: 'Ejemplo 1', completed: true},
        {name: 'Ejemplo 2', completed: false},
        {name: 'Ejemplo 3', completed: false},
      ]
    },
    {
      id: '2',
      title: 'Ejemplo 2',
      description: 'Este es otro ejemplo de tarea',
      items:[
        {name: 'Ejemplo 1', completed: true},
        {name: 'Ejemplo 2', completed: false},
        {name: 'Ejemplo 3', completed: false},
      ]
    },
    {
      id: '3',
      title: 'Ejemplo 3',
      description: 'Este es un tercer ejemplo de tarea',
      items:[
        {name: 'Ejemplo 1', completed: true},
        {name: 'Ejemplo 2', completed: false},
        {name: 'Ejemplo 3', completed: false},
      ]
    }

  ]
task: any;

  constructor() { }

  ngOnInit() {
  }

}
