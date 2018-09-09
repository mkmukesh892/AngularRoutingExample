import {Injectable , OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  /*user: {id: number, name: string} ;
  // onChanged = new EventEmitter<{id: number, name: string} []>();*/
 private users = [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Tim'},
    {id: 3, name: 'Mukesh'}
  ];
 userActivated = new Subject();
  constructor() { }
  ngOnInit() {
  }
 /* updateUsers(userData: {id: number, name: string}) {
     // alert(userData.id);
    // this.users.push(userData);
    this.user.id = userData.id;
    this.user.name = userData.name;
  }*/
  /*getUser() {
     // console.log(this.user);
    // return this.users[this.users.length - 1];
     return this.user;
  }*/
  getUsers() {
    return this.users.slice();
  }
}
