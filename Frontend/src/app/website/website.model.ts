export class Website {
  _id?: string;
  title: string;
  _serverID: string;
  description?: string;
  domains?: string[];
  createDate?: string;
  expirationDate?: string;
  hostedIntern?: boolean;
  wpVersion?: string;
  wpAutoUpdate?: boolean;

  constructor(title: string, serverID: string, description?: string, domains?: string[], createDate?: string,
              expirationDate?: string, hostedIntern?: boolean, wpVersion?: string, wpAutoUpdate?: boolean) {

    this.title = title;
    this._serverID = serverID;
    if (description !== undefined) {
      this.description = description;
    }
    if (domains !== undefined) {
      this.domains = domains;
    }
    if (createDate !== undefined) {
      this.createDate = createDate;
    }
    if (expirationDate !== undefined) {
      this.expirationDate = expirationDate;
    }
    if (hostedIntern !== undefined) {
      this.hostedIntern = hostedIntern;
    }
    if (wpVersion !== undefined) {
      this.wpVersion = wpVersion;
    }
    if (wpAutoUpdate !== undefined) {
      this.wpAutoUpdate = wpAutoUpdate;
    }
  }
}
