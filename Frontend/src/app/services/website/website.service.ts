import { Injectable } from '@angular/core';
import {WebRequestService} from '../web-request/web-request.service';
import {Website} from '../../website/website.model';

const mongoose = require('mongoose');

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {


  constructor(private webReqService: WebRequestService) { }

  createWebsite(website: Website) {

    console.log(website.serverID);

    const title = website.title;
    const _serverID = mongoose.Types.ObjectId(website.serverID);
    const description = website.description;
    const domains = website.domains;
    const createDate = website.createDate;
    const expirationDate = website.expirationDate;
    const hostedIntern = website.hostedIntern;
    return this.webReqService.post('websites', {title, _serverID, description, domains, createDate, expirationDate, hostedIntern});
  }

  getWebsite(serverID: string) {
    const website = this.webReqService.get('servers/' + serverID + '/websites');
    return website;
  }
}
