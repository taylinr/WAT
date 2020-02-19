export class Website {
  title: string;
  serverID: string;
  description?: string;
  domains?: [string];
  createDate?: string;
  expirationDate?: string;
  hostedIntern?: boolean;


  constructor(title: string, serverID: string, description?: string, domains?: [string], createDate?: string,
              expirationDate?: string, hostedIntern?: boolean) {

    this.title = title;
    this.serverID = serverID;
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
  }
}
