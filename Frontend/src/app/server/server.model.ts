export class Server {
  ip: string;
  title?: string;
  login?: boolean;
  software?: string;
  description?: string;

  constructor(ip: string, title?: string, login?: boolean, software?: string, description?: string) {
    this.ip = ip;
    if (title !== undefined) {
      this.title = title;
    }
    if (login !== undefined) {
      this.login = login;
    }
    if (software !== undefined) {
      this.software = software;
    }
    if (description !== undefined) {
      this.description = description;
    }
  }
}
