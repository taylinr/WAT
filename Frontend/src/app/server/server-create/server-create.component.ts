import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Server} from '../server.model';
import {NgForm} from '@angular/forms';
import {ServerService} from 'src/app/services/server/server.service';
import {ServerInteractionService} from 'src/app/services/interaction/server-interaction.service';

@Component({
  selector: 'app-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.css']
})
export class ServerCreateComponent implements OnInit {

  showForm = false;

  constructor(private serverService: ServerService, private interactionService: ServerInteractionService) { }

  ngOnInit(): void {
  }

  onAddServer(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      let server: Server;
      let login = false;
      if (form.value.serverLogin !== 'indeterminate') {
        login = true;
      }
      server = new Server((form.value.serverIP), (form.value.serverTitle), login,
        (form.value.serverSoftware), (form.value.serverDescription));
      this.serverService.createServer(server).subscribe((response: Server) => {
        console.log(response);
        if (response) {
          form.reset();
          this.showForm = false;
          this.interactionService.updateList(response);
        }
      });
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
