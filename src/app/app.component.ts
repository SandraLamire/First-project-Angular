import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project-angular';
  userName: string = "";

  constructor(private userService: UserService) { };

  saveName() {
    this.userService.setUserName(this.userName);
    this.userName = "";
  }

  loadName() {
    this.userName = this.userService.getUserName();
  }

}
