import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  name: string = '';
  users:string[] = [];

  resetName() {
    this.name = '';
  }

  addUser() {
    if (this.name) {
      this.users.push(this.name);
      this.name = '';
    }
  }

  removeUser(user: string) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
