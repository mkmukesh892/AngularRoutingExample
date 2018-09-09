import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Observable, Observer, Subscription, interval} from 'rxjs';
import { map} from 'rxjs/Operators';
import 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObservableSubscription: Subscription;
  customObservableSubscription: Subscription;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000).pipe(map((data: number) => { return 2 * data; }));
    this.numbersObservableSubscription = myNumbers.subscribe((number: Number) => {console.log(number); });
   const myObservable = Observable.create((observer: Observer<string>) => {
     setTimeout(() => {observer.next('first package'); } , 2000);
     setTimeout(() => {observer.next('second package'); } , 4000);
     setTimeout(() => {observer.complete(); } , 5000);
     setTimeout(() => {observer.error('this does not work'); } , 6000);
   });
   this.customObservableSubscription = myObservable.subscribe(
     (data: string) => {console.log(data); },
     (error: string) => {console.log(error); },
     () => {console.log('completed'); }
   );
  }
  onLoadServers() {
    this.router.navigate(['/servers', 5, 'edit'], { queryParams: {editAllow: 1}, fragment: 'loading'});
  }
  onLoadUsers() {
    this.router.navigate(['/users', 4, 'hero']);
  }
  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
  /*onLoadServer() {
    this.router.navigate(['/servers', 5]);
  }*/
  ngOnDestroy() {
    this.numbersObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
