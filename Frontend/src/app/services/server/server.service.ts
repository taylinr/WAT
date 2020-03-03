import { Injectable } from '@angular/core';
import { WebRequestService} from '../web-request/web-request.service';
import {Server} from '../../server/server.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private webReqService: WebRequestService) { }

  createServer(server: Server) {
    const title = server.title;
    const ip = server.ip;
    const login = server.login;
    const software = server.software;
    const description = server.description;
    return this.webReqService.post('servers', {ip, title, login, software, description});
  }

  getServer() {
    const server = this.webReqService.get('servers');
    return server;
  }

  getOneServer(id: string) {
    const server = this.webReqService.get('servers/' + id);
    return server;
  }

  deleteServer(id: string) {
    console.log('deleteServer: ' + id);
    return this.webReqService.delete('servers/' + id);
  }
}
