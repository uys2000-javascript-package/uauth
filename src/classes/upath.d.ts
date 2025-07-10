export class UAuthPath {
  signin: string;
  signup: string;
  signout: string;
  signoff: string;
  constructor(
    signin?: string,
    signup?: string,
    signout?: string,
    signoff?: string
  );
}

export class USessionPath {
  check: string;
  list: string;
  remove: string;
  constructor(check?: string, list?: string, remove?: string);
}
