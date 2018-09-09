import { Component, OnInit } from '@angular/core';
import {ServersService} from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  appStatus = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('stable');
    },2000);
  });
server: {id: number, name: string, status: string};
servers = [
  {
    instanceType: 'small',
    name: 'Production',
    status: 'stable',
    started: new Date(15,1,2017)
  },
  {
    instanceType: 'medium',
    name: 'User Database',
    status: 'stable',
    started: new Date(15,1,2017)
  },
  {
    instanceType: 'large',
    name: 'Development Server',
    status: 'offline',
    started: new Date(15,1,2017)
  },
  {
    instanceType: 'small',
    name: 'Testing Environment Server',
    status: 'stable',
    started: new Date(15,1,2017)
  }
];
filteredStatus = '';
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /*const id = +this.route.snapshot.params['id'] ;
    this.server = this.serversService.getServer(id - 1);
    this.route.params.subscribe((params: Params) => {this.server = this.serversService.getServer(+params['id'] - 1 ); } );*/
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }
  getStatusClassess(serverData: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': serverData.status === 'stable',
      'list-group-item-warning': serverData.status === 'offline',
      'list-group-item-danger': serverData.status === 'critical',
      'list-group-item-info': serverData.status === 'online'
    };
  }
  onEdit() {
    // this.router.navigate(['/servers', +this.route.snapshot.params['id'], 'edit'], {queryParams: {editAllow: 1}, fragment: 'loading'});
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
  onAddServer() {
    this.servers.push({
      instanceType: 'higher',
      name: 'Administration',
      status: this.filteredStatus,
      started: new Date(15,1,2017)
    })
  }
}
