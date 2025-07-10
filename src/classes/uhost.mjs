export class UHost {
  local = "http://localhost:8000/api/";
  test = "https://services-test.mehmetuysal.dev/api/";
  production = "https://services.mehmetuysal.dev/api/";
  host = this.local;
  constructor(environment, service, local, test, production) {
    if (local) this.local = local;
    if (test) this.test = test;
    if (production) this.production = production;

    if (service) {
      this.local += service + "/";
      this.test += service + "/";
      this.production += service + "/";
    }

    switch (environment) {
      case "local":
        this.host = this.local;
        break;
      case "test":
        this.host = this.test;
        break;
      case "production":
        this.host = this.production;
        break;
    }
  }
}
