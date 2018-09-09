import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ServerComponent} from './servers/server/server.component';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './users/user/user.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {UsersComponent} from './users/users.component';
import {ServersComponent} from './servers/servers.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';
// import {AuthService} from './auth.service';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      /*{path: ':id', component: UserComponent},*/
      {path: ':id/:name', component: UserComponent},
    ]},
  {path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
    ]},
    {path: 'server/:id' , component: ServerComponent},
  {path: 'user/:id' , component: UserComponent},
  // {path: 'not-found', component: NotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'page not found!'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found'},
];
@NgModule({
imports: [
  RouterModule.forRoot(appRoutes)
],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
