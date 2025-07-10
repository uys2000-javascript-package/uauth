export class UPath {
  signin = "signin.php";
  signup = "signup.php";
  signout = "signout.php";
  signoff = "signoff.php";
  constructor(signin, signup, signout, signoff) {
    if (signin) this.signin = signin;
    if (signup) this.signup = signup;
    if (signout) this.signout = signout;
    if (signoff) this.signoff = signoff;
  }
}
