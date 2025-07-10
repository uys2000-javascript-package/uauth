import { get, post } from "../service/http.mjs";
import { UHost } from "./uhost.mjs";
import { UPath } from "./upath.mjs";
export class UAuth {
  host = new UHost("local");
  path = new UPath();

  constructor(host, path) {
    if (host) this.host = host;
    if (path) this.path = path;
  }

  async signUp(name, email, password, platform) {
    const response = await post(
      this.host.host + this.path.signup,
      {},
      { name, email, password, platform },
      false
    );
    const result = await response.json();

    if (!result.data?.token) throw new Error(result.message);
    document.cookie = `token=${result.data.token}; path=/; SameSite=Lax`;
    return result.data.token;
  }

  async signIn(email, password, platform) {
    const response = await post(
      this.host.host + this.path.signin,
      {},
      { email, password, platform },
      false
    );
    const result = await response.json();

    if (!result.data?.token) throw new Error(result.message);
    document.cookie = `token=${result.data.token}; path=/; SameSite=Lax`;
    return result.data.token;
  }
  async signOut(token) {
    if (token) window.cookieStore.set({ name: "token", value: token });
    const response = await get(this.host.host + this.path.signout, {}, true);

    const result = await response.json();

    if (response.status != 200) throw new Error(result.message);
    document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    return true;
  }
  async signOff(email, password, platform, token) {
    if (token) window.cookieStore.set({ name: "token", value: token });
    const response = await post(
      this.host.host + this.path.signoff,
      {},
      { email, password, platform },
      true
    );

    const result = await response.json();

    if (response.status != 200) throw new Error(result.message);
    document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    return true;
  }
}
