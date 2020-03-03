import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../website/website.model';
import {WebsiteService} from '../../services/website/website.service';
import {WebsiteInteractionService} from '../../services/interaction/website-interaction.service';
import {GetServerIDService} from '../../services/interaction/get-server-id.service';
import {FormControl} from '@angular/forms';
import {WpUserService} from '../../services/wp-user/wp-user.service';
import {WpUser} from '../../wp-user/wp-user.model';

@Component({
  selector: 'app-website-create',
  templateUrl: './website-create.component.html',
  styleUrls: ['./website-create.component.css']
})
export class WebsiteCreateComponent implements OnInit {

  constructor(private websiteService: WebsiteService, private interactionService: WebsiteInteractionService, private getServerID: GetServerIDService, private userService: WpUserService) { }
  showForm = false;
  serverID: string;
  users: WpUser[];
  date = new FormControl(new Date());



  wpVersionsControl = new FormControl();
  wpVersions: string[] = ['5.x', '4.x', '3.x'];

  userNamesControl = new FormControl();
  userNames: string[] = [];


  ngOnInit(): void {

    this.getServerID.newServerID$.subscribe(
      NewServerID => {
        this.serverID = NewServerID;
    });

    this.userService.getAllWpUser().subscribe((users: WpUser[]) => {
      this.users = users;

      for (const user of this.users) {
        this.userNames.push(user.firstName + ' ' + user.lastName);
      }
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
      const websiteUserNames: string[] = this.userNamesControl.value;

      title = form.value.websiteTitle;
      description = form.value.websiteDescription;
      createDate = this.date.value;
      expirationDate = form.value.websiteExpirationDate;
      hostedIntern = (form.value.websiteHostedIntern === true);
      if (this.wpVersionsControl.value !== undefined) {
        wpVersion = this.wpVersionsControl.value;
      }
      wpAutoUpdate = (form.value.websiteWpAutoUpdate === true);
      console.log('Version: ' + wpVersion);

      domains = [];


      const domainsString = form.value.websiteDomains;
      const domainsStringArray = domainsString.split(', ');
      for (let i = 0; i < domainsStringArray.length; i++) {
        domains.push((domainsStringArray[i]));
      }

      website = new Website(title, this.serverID, description, domains, createDate, expirationDate, hostedIntern, wpVersion,  wpAutoUpdate);

      this.websiteService.createWebsite(website).subscribe((websiteResponse: Website) => {
        console.log(websiteResponse);
        if (websiteResponse) {
          form.reset();
          this.showForm = false;
          for (const username of websiteUserNames) {
            for (const user of this.users) {
              if ((user.firstName + ' ' + user.lastName) === username) {

                user._websiteID.push(websiteResponse._id);

                let JSONstring = '{ "_websiteID": [';

                for (const webID of user._websiteID) {
                  JSONstring += '"' + webID + '",';
                }
                JSONstring = JSONstring.substring(0, JSONstring.length - 1);
                JSONstring +=  '] }';

                console.log('JSON String: ' + JSONstring);

                this.userService.updateWpUser(user._id, JSON.parse(JSONstring)).subscribe((userResponse: any) => {

                    console.log(userResponse);

                });
              }
            }
          }
          this.interactionService.updateList(websiteResponse);
        }
      });
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

}
