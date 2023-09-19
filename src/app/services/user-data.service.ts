import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { };

  getVersion(): string {
    return '1.0';
  }
}
