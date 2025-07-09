export class UPath {
  signin: string = "signin.php";
  signup: string = "signup.php";
  signout: string = "signout.php";
  signoff: string = "signoff.php";
  constructor(
    signin?: string,
    signup?: string,
    signout?: string,
    signoff?: string
  ) {
    if (signin) this.signin = signin;
    if (signup) this.signup = signup;
    if (signout) this.signout = signout;
    if (signoff) this.signoff = signoff;
  }
}
