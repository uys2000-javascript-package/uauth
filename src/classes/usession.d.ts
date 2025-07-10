import { UHost } from "./uhost.mjs";
import { USessionPath } from "./upath.mjs";
export type UPlatform = "android" | "ios" | "web";

export class USession {
  token!: string;
  ip!: string;
  platform!: UPlatform;
  timestamp!: number;
}

export class USessionService {
  host: UHost;
  path: USessionPath;
  token: string;

  constructor(host?: UHost, path?: USessionPath, token?: string);
  check(): Promise<boolean>;
  list(): Promise<Array<USession>>;
  remove(token: string): Promise<boolean>;
}
