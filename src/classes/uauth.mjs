import { UHost } from "@uys2000/u-host";
import { doGet, doPost } from "@uys2000/u-http";
import { UAuthPath } from "./upath.mjs";

export class UAuthService {
  host = new UHost("local", "auth");
  path = new UAuthPath();
  token = "";
  constructor(host, path, token) {
    if (host) this.host = host;
    if (path) this.path = path;
    if (token) this.token = token;
  }

  async signUp(name, email, password, platform) {
    const url = this.host.host + this.path.signup;
    const body = { name, email, password, platform };
    const response = await doPost(url, {}, body);
    const result = await response.json();

    if (!result.data?.token) throw new Error(result.message);
    this.token = result.data;
    return result.data;
  }

  async signIn(email, password, platform) {
    const url = this.host.host + this.path.signin;
    const body = { email, password, platform };
    const response = await doPost(url, {}, body);
    const result = await response.json();

    if (!result.data?.token) throw new Error(result.message);
    this.token = result.data;
    return result.data;
  }
  async signOut(token) {
    if (token) this.token = token;

    const url = this.host.host + this.path.signout;
    const response = await doGet(url, {}, { token: this.token });
    const result = await response.json();

    if (response.status != 200) throw new Error(result.message);
    this.token = "";
    return true;
  }
  async signOff(email, password, platform, token) {
    if (token) this.token = token;
    const url = this.host.host + this.path.signoff;
    const body = { email, password, platform };
    const response = await doPost(url, {}, body, { token: this.token });
    const result = await response.json();

    if (response.status != 200) throw new Error(result.message);
    this.token = "";
    return true;
  }
}
