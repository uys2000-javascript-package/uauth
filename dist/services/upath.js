export class UPath {
    constructor(signin, signup, signout, signoff) {
        this.signin = "signin.php";
        this.signup = "signup.php";
        this.signout = "signout.php";
        this.signoff = "signoff.php";
        if (signin)
            this.signin = signin;
        if (signup)
            this.signup = signup;
        if (signout)
            this.signout = signout;
        if (signoff)
            this.signoff = signoff;
    }
}
