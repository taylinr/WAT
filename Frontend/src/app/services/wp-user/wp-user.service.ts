import { Injectable } from '@angular/core';
import {WebRequestService} from '../web-request/web-request.service';
import {WpUser} from '../../wp-user/wp-user.model';



@Injectable({
  providedIn: 'root'
})
export class WpUserService {

  constructor(private webReqService: WebRequestService) { }

  createWpUser(wpUser: WpUser) {
    const firstName = wpUser.firstName;
    const lastName = wpUser.lastName;
    const mail = wpUser.mail;
    const _websiteID = wpUser._websiteID;
    return this.webReqService.post('websites', {firstName, lastName, mail, _websiteID});
  }

  getAllWpUser() {
    const wpUser = this.webReqService.get('wp-users');
    return wpUser;
  }

  getWpUser(websiteID: string) {
    const wpUser = this.webReqService.get('wp-users/' + websiteID);
    return wpUser;
  }

  deleteWpUser(wpUserID: string) {
    return this.webReqService.delete('wp-users/' + wpUserID );
  }
}
