import {Component, OnInit, OnChanges, Input, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UsersService} from '../users.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges, OnDestroy {

    user: {id: number, name: string} ;
    id: number;
    currentDate = new Date();
   paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }
  ngOnInit() {
   /* this.user.id = 10;
    this.user.name = 'Dummy';*/
   this.user = {
     id: this.route.snapshot.params['id'],
     name: this.route.snapshot.params['name']
   };
   this.paramsSubscription = this.route.params.subscribe((params: Params) => {
     this.user.id = +params['id'];
     this.user.name = params['name'];
   });
  }
  ngOnChanges() {
    console.log(this.user);
  }
ngOnDestroy() {
   this.paramsSubscription.unsubscribe();
}
  onActivate() {
    console.log(this.user.id);
    this.usersService.userActivated.next(this.user.id);
  }
}
