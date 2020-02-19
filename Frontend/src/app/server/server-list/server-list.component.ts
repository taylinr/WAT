import { Component, OnInit, Input } from '@angular/core';
import {Server} from '../server.model';
import {ServerService} from 'src/app/services/server/server.service';
import {ServerInteractionService} from '../../services/interaction/server-interaction.service';
import {GetServerIDService} from '../../services/interaction/get-server-id.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  servers: Server[] = [];

  constructor(private serverService: ServerService, private interactionService: ServerInteractionService, private getServerID: GetServerIDService) {}

  ngOnInit(): void {
    this.serverService.getServer().subscribe((servers: Server[]) => {
      this.servers = servers;
    });

    this.interactionService.newServer$.subscribe(
      serverUpdate => { this.servers.push(serverUpdate); }
    );
  }

  onGetWebsites(id: string) {
    this.getServerID.getWebsites(id);
  }
}
