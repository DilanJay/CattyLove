import React from "react";
import StyleHeding from "../../component/honeheader/StyleHeding";
import StylishButton from "../../component/stylishButton/StylishButton";
import "./SignUp.css";
function SignUp() {
  return (
    <div class="container emp-profile">
      <div class="form-horizontal">
        <div class="row">
          <div class="col-8 offset-4">{/* <h2>Sign Up</h2> */}</div>
          <StyleHeding name="Sign UP"></StyleHeding>
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
          <label class="col-form-label col-4">First Name</label>
          <div class="col-8">
            <input
              type="text"
              class="form-control"
              name="firstName"
              required="required"
              placeholder="First Name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-4">Last Name</label>
          <div class="col-8">
            <input
              type="text"
              class="form-control"
              name="lastName"
              required="required"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-4">Email Address</label>
          <div class="col-8">
            <input
              type="email"
              class="form-control"
              name="email"
              required="required"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-4">Contact Number</label>
          <div class="col-8">
            <input
              type="text"
              class="form-control"
              name="contactNumber"
              required="required"
              placeholder="Contact Number"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-4">Gender</label>
          <div class="col-8">
            <input
              type="text"
              class="form-control"
              name="gender"
              required="required"
              placeholder="Gender"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-4">Birthday</label>
          <div class="col-8">
            <input
              type="date"
              class="form-control"
              name="birthday"
              required="required"
              placeholder="Birthday"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-4">Profesion</label>
          <div class="col-8">
            <input
              type="text"
              class="form-control"
              name="profesion"
              required="required"
              placeholder="Profesion"
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
        <div class="form-group row">
          <label class="col-form-label col-4">Confirm Password</label>
          <div class="col-8">
            <input
              type="password"
              class="form-control"
              name="confirm_password"
              required="required"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-8 offset-4">
            <p>
              <label class="form-check-label">
                <input type="checkbox" required="required" /> I accept the{" "}
                <a href="#">Terms of Use</a> &amp;{" "}
                <a href="#">Privacy Policy</a>.
              </label>
            </p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <StylishButton btnName="Sign Up"></StylishButton>
      </div>
      <div class="text-center">
        Already have an account? <a href="#">Login here</a>
      </div>
    </div>
  );
}

export default SignUp;