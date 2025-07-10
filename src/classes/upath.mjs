export class UAuthPath {
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

export class USessionPath {
  check = "check.php";
  list = "list.php";
  remove = "remove.php";
  constructor(check, list, remove) {
    if (check) this.check = check;
    if (list) this.list = list;
    if (remove) this.remove = remove;
  }
}
