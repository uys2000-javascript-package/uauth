import { UHost } from "./uhost";
import { UPath } from "./upath";
import type { UPlatform } from "./usession";

export interface USessionResponse {
  name: string;
  email: string;
  token: string;
}
export class UAuthService {
  host: UHost;
  path: UPath;
  token: string;

  constructor(host?: UHost, path?: UPath, token?: string);
  signUp(
    name: string,
    email: string,
    password: string,
    platform: UPlatform
  ): Promise<USessionResponse>;

  signIn(
    email: string,
    password: string,
    platform: UPlatform
  ): Promise<USessionResponse>;
  signOut(token?: string): Promise<boolean>;
  signOff(
    email: string,
    password: string,
    platform: UPlatform,
    token?: string
  ): Promise<boolean>;
}
