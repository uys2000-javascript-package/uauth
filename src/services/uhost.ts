export class UHost {
  local: string = "http://localhost:8000/api/auth/";
  test: string = "https://services-test.mehmetuysal.dev/api/auth/";
  production: string = "https://services.mehmetuysal.dev/api/auth/";
  host: string = this.local;
  constructor(
    environment: "local" | "test" | "production",
    local?: string,
    test?: string,
    production?: string
  ) {
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
