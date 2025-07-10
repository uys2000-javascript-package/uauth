import { UHost } from "./uhost";
import { UPath } from "./upath";
export type Platform = "android" | "ios" | "web";
export class UAuth {
  host: UHost;
  path: UPath;

  constructor(host?: UHost, path?: UPath);
  signUp(
    name: string,
    email: string,
    password: string,
    platform: Platform
  ): Promise<string>;

  signIn(email: string, password: string, platform: Platform): Promise<string>;
  signOut(token?: string): Promise<boolean>;
  signOff(
    email: string,
    password: string,
    platform: Platform,
    token?: string
  ): Promise<boolean>;
}
