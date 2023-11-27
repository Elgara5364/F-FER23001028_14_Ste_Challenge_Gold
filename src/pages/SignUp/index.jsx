import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="register mx-auto">
      <div className="sign-page ">
        <div className="container-fluid">
          <div className="row">
            <div className="login-area col-xl-6 ">
              <h1>Sign Up</h1>
              <div class="mb-2  ">
                <label for="exampleFormControlInput1" class="form-label">
                  Name*
                </label>
                <input
                  type="name"
                  class="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div class="mb-2  ">
                <label for="exampleFormControlInput1" class="form-label">
                  Email*
                </label>
                <input
                  type="email"
                  class="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Contoh: johndee@gmail.com"
                />
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label">
                  Create Password*
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="6+ Karakter"
                />
              </div>
              <button> Sign Up</button>
              <h6 className="text-center">
                Don't have an account?{" "}
                <Link to={"/sign-in"}>
                  <span>Sign in here</span>
                </Link>
              </h6>
            </div>
            <div className="bg col-xl-6">
              <h1>ini background</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
