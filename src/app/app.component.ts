import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project-angular';
  userName: string = "";
  version: string = "";

  // sercice cli
  constructor(private userDataService: UserDataService){
    this.version = this.userDataService.getVersion();
  }

 /*  service crée manuellement
  constructor(private userService: UserService) { };

  saveName() {
    this.userService.setUserName(this.userName);
    this.userName = "";
  }

  loadName() {
    this.userName = this.userService.getUserName();
  } 
*/
}
