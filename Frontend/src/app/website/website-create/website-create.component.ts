import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../website/website.model';
import {WebsiteService} from '../../services/website/website.service';
import {WebsiteInteractionService} from '../../services/interaction/website-interaction.service';
import {GetServerIDService} from '../../services/interaction/get-server-id.service';


@Component({
  selector: 'app-website-create',
  templateUrl: './website-create.component.html',
  styleUrls: ['./website-create.component.css']
})
export class WebsiteCreateComponent implements OnInit {
  showForm = false;
  serverID: string;

  constructor(private websiteService: WebsiteService, private interactionService: WebsiteInteractionService, private getServerID: GetServerIDService) { }

  ngOnInit(): void {
    this.getServerID.newServerID$.subscribe(
      NewServerID => {
        this.serverID = NewServerID;
      });
  }

  onAddWebsite(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      let website: Website;
      let domains: string[];
      domains = [];
      let hostedIntern: boolean;

      if (form.value.websiteHostedIntern !== 'indeterminate') {
        hostedIntern = true;
      }

      domains.push((form.value.websiteDomains));

      website = new Website((form.value.websiteTitle), (this.serverID), (form.value.websiteDescription));

      this.websiteService.createWebsite(website).subscribe((response: Website) => {
        console.log(response);
        this.interactionService.updateList(response);
      });
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
