import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Server} from '../server.model';
import {ServerService} from '../../services/server/server.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit {

  showEdit = false;

  @Input() serverID: string;

  server: Server;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getOneServer(this.serverID).subscribe((server: Server) => {
      this.server = server;
    });

    console.log('server:' + this.server);
  }

  onEditServer(form: NgForm) {

  }

  toggleForm() {
    this.showEdit = !this.showEdit;
  }
}
