import { Component, OnInit, Input } from '@angular/core';
import {Server} from '../server.model';
import {ServerService} from 'src/app/services/server/server.service';
import {ServerInteractionService} from '../../services/interaction/server-interaction.service';
import {GetServerIDService} from '../../services/interaction/get-server-id.service';
import {SearchService} from '../../services/search/search.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  servers: Server[] = [];

  constructor(private serverService: ServerService, private interactionService: ServerInteractionService, private getServerID: GetServerIDService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.serverService.getServer().subscribe((servers: Server[]) => {
      this.servers = servers;
    });

    this.interactionService.newServer$.subscribe(
      serverUpdate => { this.servers.push(serverUpdate); }
    );

    this.searchService.newSearch$.subscribe(
      updateString => {
        if (updateString === '') {
          this.serverService.getServer().subscribe((servers: Server[]) => {
            this.servers = servers;
          });
        } else {
          for (let i = 0; i < this.servers.length; i++) {
            if (
              !(this.servers[i].title.toLowerCase().includes(updateString.toLowerCase())
              || this.servers[i].description.toLowerCase().includes(updateString.toLowerCase())
              || this.servers[i].software.toLowerCase().includes(updateString.toLowerCase())
              || this.servers[i].ip.toLowerCase().includes(updateString.toLowerCase()))
            ) {
              this.servers.splice(i, 1);
            }
          }
        }
      }
    );
  }

  getServerIDForWebsites(id: string) {
    if (id !== undefined) {
      this.getServerID.getWebsites(id);
    }
  }

  onDelete(id: string) {
    console.log('onDelete: ' + id);
    this.serverService.deleteServer(id).subscribe((response: any) => {
      console.log(response);
    });

    for (let i = 0; i < this.servers.length; i++) {
      if (this.servers[i]._id === id) {
        this.servers.splice(i, 1);
      }
    }
  }
}
