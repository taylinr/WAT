import { Injectable } from '@angular/core';
import {WebRequestService} from '../web-request/web-request.service';
import {Website} from '../../website/website.model';



@Injectable({
  providedIn: 'root'
})
export class WebsiteService {


  constructor(private webReqService: WebRequestService) { }

  createWebsite(website: Website) {

    const title = website.title;
    const _serverID = website._serverID;
    const description = website.description;
    const domains = website.domains;
    const createDate = website.createDate;
    const expirationDate = website.expirationDate;
    const hostedIntern = website.hostedIntern;
    const wpAutoUpdate = website.wpAutoUpdate;
    const wpVersion = website.wpVersion;

    console.log("Service: " + wpVersion + " " + wpAutoUpdate);

    console.log(_serverID);
    return this.webReqService.post('websites', {title, _serverID, description, domains, createDate, expirationDate, hostedIntern,  wpVersion, wpAutoUpdate});
  }

  getWebsite(serverID: string) {
    const website = this.webReqService.get('servers/' + serverID + '/websites');
    return website;
  }

  deleteWebsite(websiteID: string) {
    return this.webReqService.delete('websites/' + websiteID );
  }
}
