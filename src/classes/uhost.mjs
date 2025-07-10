export class UHost {
  local = "http://localhost:8000/api/auth/";
  test = "https://services-test.mehmetuysal.dev/api/auth/";
  production = "https://services.mehmetuysal.dev/api/auth/";
  host = this.local;
  constructor(environment, local, test, production) {
    if (local) this.local = local;
    if (test) this.test = test;
    if (production) this.production = production;

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
