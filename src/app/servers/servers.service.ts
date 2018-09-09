import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private servers = [
    {id: 1, name: 'Jio', status: 'Active'},
    {id: 2, name: 'Airtel', status: 'Inactive'},
    {id: 3, name: 'VodaPhone', status: 'unknown'},
  ];
  constructor() { }
    getServers() {
    return this.servers.slice();
  }
  getServer(id: number) {
    return this.servers[id];
  }
  updateServer(id: number, serverData: {name: string, status: string}) {
   this.servers[id].name = serverData.name;
   this.servers[id].status = serverData.status;
  }
}
