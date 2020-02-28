export class WpUser {
  _id?: string;
  firstName: string;
  lastName: string;
  mail: string;
  _websiteID?: string[];

  constructor(firstName: string, lastName: string, mail: string, _websiteID?: string[]) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    if (_websiteID !== undefined) {
      this._websiteID = _websiteID;
    }
  }
}
