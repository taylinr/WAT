import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../website/website.model';
import {WebsiteService} from '../../services/website/website.service';
import {WebsiteInteractionService} from '../../services/interaction/website-interaction.service';
import {GetServerIDService} from '../../services/interaction/get-server-id.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-website-create',
  templateUrl: './website-create.component.html',
  styleUrls: ['./website-create.component.css']
})
export class WebsiteCreateComponent implements OnInit {



  constructor(private websiteService: WebsiteService, private interactionService: WebsiteInteractionService, private getServerID: GetServerIDService) { }
  showForm = false;
  serverID: string;
  date = new FormControl(new Date());
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  toppings: string[] = ['One', 'Two', 'Three'];


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
      let title: string;
      let domains: string[];
      let hostedIntern: boolean;
      let createDate: string;
      let expirationDate: string;
      let description: string;
      let wpVersion: string;
      let wpAutoUpdate: boolean;

      title = form.value.websiteTitle;
      description = form.value.websiteDescription;
      createDate = form.value.websiteCreateDate;
      expirationDate = form.value.websiteExpirationDate;
      hostedIntern = !(form.value.websiteHostedIntern === 'indeterminate');
      if (form.value.websiteWpVersion !== undefined) {
        wpVersion = form.value.websiteWpVersion;
      }
      wpAutoUpdate = !(form.value.websiteWpAutoUpdate === 'indeterminate');
      domains = [];

      console.log('Wordpress: ' + wpVersion + ' ' + wpAutoUpdate);

      const domainsString = form.value.websiteDomains;
      const domainsStringArray = domainsString.split(', ');
      for (let i = 0; i < domainsStringArray.length; i++) {
        domains.push((domainsStringArray[i]));
      }

      website = new Website(title, this.serverID, description, domains, createDate, expirationDate, hostedIntern, wpVersion,  wpAutoUpdate);

      this.websiteService.createWebsite(website).subscribe((response: Website) => {
        console.log(response);
        this.interactionService.updateList(response);
        if (response) {
          form.reset();
          this.showForm = false;
        }
      });
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

}
