import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    public currentUser: string = '';

    constructor() { };

    setUserName(name: string) {
        this.currentUser = name;
    }

    getUserName() {
        return this.currentUser;
    }
}