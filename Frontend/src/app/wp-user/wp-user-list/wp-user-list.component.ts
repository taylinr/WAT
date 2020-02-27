import { Component, OnInit } from '@angular/core';
import {WpUser} from '../../wp-user/wp-user.model';
import {WpUserService} from '../../services/wp-user/wp-user.service';
import {WpUserInteractionService} from '../../services/interaction/wp-user-interaction.service';

@Component({
  selector: 'app-wp-user-list',
  templateUrl: './wp-user-list.component.html',
  styleUrls: ['./wp-user-list.component.css']
})
export class WpUserListComponent implements OnInit {

  users: WpUser[];

  constructor(private wpUserService: WpUserService, private interactionService: WpUserInteractionService) { }

  ngOnInit(): void {
    this.wpUserService.getAllWpUser().subscribe((users: WpUser[]) => {
      this.users = users;
    });

    this.interactionService.newWpUser$.subscribe(
      wpUserUpdate => { this.users.push(wpUserUpdate); }
    );
  }

  onDelete(userID: string){
    this.wpUserService.deleteWpUser(userID).subscribe((response: any) => {
      console.log(response);
    });
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userID) {
        this.users.splice(i, 1);
      }
    }
  }

}
