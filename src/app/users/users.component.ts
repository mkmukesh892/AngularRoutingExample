import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit , OnDestroy {
  userActivated = false;
  users: {id: number, name: string}[] = [ ];
  id1: number ;
  user1: {id: number, name: string};
  userSubscription: Subscription;
  constructor(private usersService: UsersService) {
   // this.id1 = 4;
    /*this.user1.id = 4;
    this.user1.name = 'Sohan';*/
  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    this.userSubscription = this.usersService.userActivated.subscribe(
      (id: number) => {
        if ((id === 1) || (id === 2) || (id === 3) ) {
          this.userActivated = true;
          console.log(this.userActivated);
        }
      }
    );
  }
  gotoUserPage(id: number) {
    // alert(this.users[id]);
    this.id1 = id;
    this.user1 = this.users[id];
    // this.usersService.updateUsers(this.users[id]);
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
