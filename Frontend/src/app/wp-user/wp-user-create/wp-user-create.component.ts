import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {WpUser} from '../wp-user.model';
import {WpUserService} from '../../services/wp-user/wp-user.service';
import {WpUserInteractionService} from '../../services/interaction/wp-user-interaction.service';

@Component({
  selector: 'app-wp-user-create',
  templateUrl: './wp-user-create.component.html',
  styleUrls: ['./wp-user-create.component.css']
})
export class WpUserCreateComponent implements OnInit {

  showForm = false;
  websites: string[];

  constructor(private userService: WpUserService, private interactionService: WpUserInteractionService) { }

  ngOnInit(): void {
  }

  onAddUser(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      let newUser: WpUser;

      newUser = new WpUser((form.value.wpUserFirstName), (form.value.wpUserLastName),
        (form.value.wpUserMail), this.websites);
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
