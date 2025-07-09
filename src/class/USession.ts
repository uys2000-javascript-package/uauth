import { USQL } from "./USql";

export type Platform = "android" | "ios" | "web";

export class USession extends USQL {
  ip!: string;
  token!: string;
  platform!: Platform;
}
