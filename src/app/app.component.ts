import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from './users/users.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user1Activated = false;
  user2Activated = false;
  user3Activated = false;
  // title = 'app';
  subscription: Subscription;
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.subscription = this.usersService.userActivated.subscribe(
      (id: number) => {
        if ( id === 1 ) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        } else if (id === 3) {
          this.user3Activated = true;
        }
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
