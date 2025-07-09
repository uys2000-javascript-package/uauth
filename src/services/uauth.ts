import { Platform } from "../class/USession";
import { get, getUrl, post } from "./https";
import { UHost } from "./uhost";
import { UPath } from "./upath";
export class UAuth {
  host: UHost = new UHost("local");
  path: UPath = new UPath();

  constructor(host?: UHost, path?: UPath) {
    if (host) this.host = host;
    if (path) this.path = path;
  }

  async signUp(
    name: string,
    email: string,
    password: string,
    platform: Platform
  ) {
    const response = await post(
      this.host.host + this.path.signup,
      {},
      { name, email, password, platform }
    );
    const result = (await response.json()) as {
      message: string;
      data?: { token: string };
    };

    if (!result.data?.token) throw new Error(result.message);
    window.cookieStore.set({ name: "token", value: result.data.token });
    return result.data.token;
  }

  async signIn(email: string, password: string, platform: Platform) {
    const response = await post(
      this.host.host + this.path.signin,
      {},
      { email, password, platform }
    );
    const result = (await response.json()) as {
      message: string;
      data?: { token: string };
    };

    if (!result.data?.token) throw new Error(result.message);
    window.cookieStore.set({ name: "token", value: result.data.token });
    return result.data.token;
  }
  async signOut(token?: string) {
    if (token) window.cookieStore.set({ name: "token", value: token });
    const response = await get(getUrl(this.host.host + this.path.signout), {});

    const result = (await response.json()) as {
      message: string;
      data?: { token: string };
    };

    if (response.status != 200) throw new Error(result.message);
    window.cookieStore.delete({ name: "token" });
    return true;
  }
  async signOff(
    email: string,
    password: string,
    platform: Platform,
    token?: string
  ) {
    if (token) window.cookieStore.set({ name: "token", value: token });
    const response = await post(
      getUrl(this.host.host + this.path.signoff),
      {},
      { email, password, platform }
    );

    const result = (await response.json()) as {
      message: string;
      data?: { token: string };
    };

    if (response.status != 200) throw new Error(result.message);
    window.cookieStore.delete({ name: "token" });
    return true;
  }
}
