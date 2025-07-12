import { UHost } from "@uys2000/u-host";
import { doGet, doDelete } from "@uys2000/u-http";
import { USessionPath } from "./upath.mjs";

export class USessionService {
  host = new UHost("local", "session");
  path = new USessionPath();
  token = "";

  constructor(host, path, token) {
    if (host) this.host = host;
    if (path) this.path = path;
    if (token) this.token = token;
  }
  async check() {
    if (!this.token) return false;
    const url = this.host.host + this.path.check;
    const response = await doGet(url, {}, this.token);
    const result = await response.json();

    if (!result.data?.status) throw new Error(result.message);
    return result.data.status;
  }
  async list() {
    if (!this.token) return false;
    const url = this.host.host + this.path.list;
    const response = await doGet(url, {}, this.token);
    const result = await response.json();

    if (!result.data?.sessions) throw new Error(result.message);
    return result.data.sessions;
  }
  async remove(token) {
    if (!token) return false;
    const url = this.host.host + this.path.remove;
    const response = await doDelete(url, { token }, this.token);
    const result = await response.json();

    if (!result.data?.status) throw new Error(result.message);
    if (this.token == token) this.token = "";
    return result.data.status;
  }
}
