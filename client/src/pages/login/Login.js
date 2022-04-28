import React from "react";
import StyleHeding from "../../component/honeheader/StyleHeding";
import StylishButton from "../../component/stylishButton/StylishButton";
import "./Login.css";
function Login() {
  return (
    <div class="container emp-profile">
      <div class="form-horizontal">
        <div class="row">
          <div class="col-8 offset-4">{/* <h2>Sign Up</h2> */}</div>
          <StyleHeding name="Sign In"></StyleHeding>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-4">Username</label>
          <div class="col-8">
            <input
              type="text"
              class="form-control"
              name="username"
              required="required"
              placeholder="Username"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-4">Password</label>
          <div class="col-8">
            <input
              type="password"
              class="form-control"
              name="password"
              required="required"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <div class="text-center">
        <StylishButton btnName="Sign In"></StylishButton>
      </div>
      <div class="text-center">
        Dont have an account? <a href="#">Signup here</a>
      </div>
    </div>
  );
}

export default Login;
