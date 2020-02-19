import { Component, OnInit, Input } from '@angular/core';
import {Website} from '../website.model';
import {WebsiteService} from '../../services/website/website.service';
import {GetServerIDService} from '../../services/interaction/get-server-id.service';
import {WebsiteInteractionService} from '../../services/interaction/website-interaction.service';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  websites: Website[] = [];
  serverID: string;

  constructor(private websiteService: WebsiteService, private getServerID: GetServerIDService, private websiteInteractionService: WebsiteInteractionService) {}

  ngOnInit(): void {
    this.getServerID.newServerID$.subscribe(
      NewServerID => {
        this.serverID = NewServerID;
        this.websiteService.getWebsite(this.serverID).subscribe((websites: Website[]) => {
          this.websites = websites;
        });
      }
    );

    this.websiteService.getWebsite(this.serverID).subscribe((websites: Website[]) => {
      this.websites = websites;
    });

    this.websiteInteractionService.newWebsite$.subscribe(
      websiteUpdate => { this.websites.push(websiteUpdate); }
    );
  }
}
