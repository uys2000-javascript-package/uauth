export class UHost {
    constructor(environment, local, test, production) {
        this.local = "http://localhost:8000/api/auth/";
        this.test = "https://services-test.mehmetuysal.dev/api/auth/";
        this.production = "https://services.mehmetuysal.dev/api/auth/";
        this.host = this.local;
        if (local)
            this.local = local;
        if (test)
            this.test = test;
        if (production)
            this.production = production;
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
