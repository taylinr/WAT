import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {WpUser} from '../wp-user.model';
import {WpUserService} from '../../services/wp-user/wp-user.service';
import {WpUserInteractionService} from '../../services/interaction/wp-user-interaction.service';
import {Website} from '../../website/website.model';
import {WebsiteService} from '../../services/website/website.service';

@Component({
  selector: 'app-wp-user-create',
  templateUrl: './wp-user-create.component.html',
  styleUrls: ['./wp-user-create.component.css']
})
export class WpUserCreateComponent implements OnInit {

  showForm = false;
  websites: Website[];
  options =  new FormControl();
  optionList: string[] = [];

  constructor(private userService: WpUserService, private interactionService: WpUserInteractionService, private websiteService: WebsiteService) { }

  ngOnInit(): void {
    this.websiteService.getAllWebsites().subscribe((websites: Website[]) => {
        this.websites = websites;
        for (const website of this.websites) {
          this.optionList.push(website.title);
        }
    });
  }

  onAddUser(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      let newUser: WpUser;
      const userWebsites: string[] = [];
      const websiteTitles: string[] = this.options.value;

      for (const website of this.websites) {
        for (const websiteTitle of websiteTitles) {
          if (website.title === websiteTitle) {
            userWebsites.push(website._id);
          }
        }
      }

      console.log('Website Titles: ' + websiteTitles);
      console.log('User Websites: ' + userWebsites);

      newUser = new WpUser((form.value.wpUserFirstName), (form.value.wpUserLastName),
        (form.value.wpUserMail), userWebsites);

      this.userService.createWpUser(newUser).subscribe((response: WpUser) => {
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
