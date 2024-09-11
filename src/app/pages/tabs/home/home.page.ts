import { Component, Inject, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateTaskComponent } from 'src/app/shared/components/add-update-task/add-update-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tasks: Task[] = [];
  task: any;

  constructor(
    private firebasSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) { }

  ngOnInit() {
    this.addOrUpdateTask(this.tasks[0]);
  }

  ionViewWillEnter() {
    this.getTasks();
  }

  getPercentage(task: Task) {
    return this.utilsSvc.getPercentage(task);
  }

  addOrUpdateTask(task?: Task) {
    this.utilsSvc.presentModal({
      component: AddUpdateTaskComponent,
      componentProps: { task },
      cssClass: 'add-update-modal'
    });
  }

  getTasks() {
    let user: User = this.utilsSvc.getFromLocalStorage('user');
    let path = `user/${user.uid}`;

    this.firebasSvc.getSubcollection(path, 'tasks').subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
}
