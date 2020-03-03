import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Website} from '../website.model';
import {WebsiteService} from '../../services/website/website.service';
import {WebsiteInteractionService} from '../../services/interaction/website-interaction.service';
import {WpUserService} from '../../services/wp-user/wp-user.service';
import {WpUser} from '../../wp-user/wp-user.model';
import {SearchService} from '../../services/search/search.service';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  websites: Website[] = [];
  users: WpUser[] = [];
  @Input() serverID: string;


  constructor(private websiteService: WebsiteService, private websiteInteractionService: WebsiteInteractionService, private userService: WpUserService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.websiteService.getWebsite(this.serverID).subscribe((websites: Website[]) => {
      this.websites = websites;
    });


    this.websiteInteractionService.newWebsite$.subscribe(
      websiteUpdate => { this.websites.push(websiteUpdate); }
    );

    this.userService.getAllWpUser().subscribe((users: WpUser[]) => {
      this.users = users;
    });

    this.searchService.newSearch$.subscribe(
      updateString => {
        if (updateString === '') {
          this.websiteService.getWebsite(this.serverID).subscribe((websites: Website[]) => {
            this.websites = websites;
          });
        } else {
          for (let i = 0; i < this.websites.length; i++) {
            if (
              !(this.websites[i].title.includes(updateString)
                || this.websites[i].description.includes(updateString)
                || this.websites[i].domains.includes(updateString)
                || this.websites[i].wpVersion.includes(updateString)
              )
            ) {
              this.websites.splice(i, 1);
            }
          }
        }
      }
    );
  }

  onDelete(id: string) {
    console.log('onDelete: ' + id);
    this.websiteService.deleteWebsite(id).subscribe((response: any) => {
      console.log(response);
    });

    let isDeleted = false;
    for (let i = 0; i < this.websites.length && !isDeleted; i++) {
        if (this.websites[i]._id === id) {
          this.websites.splice(i, 1);
          isDeleted = true;
        }
    }
  }
}
