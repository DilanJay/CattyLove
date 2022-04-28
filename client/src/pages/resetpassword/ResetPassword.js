import React from "react";
import StyleHeding from "../../component/honeheader/StyleHeding";
import StylishButton from "../../component/stylishButton/StylishButton";
import "./ResetPassword.css";
function ResetPassword() {
  return (
    <div class="container emp-profile">
      <div class="form-horizontal">
        <div class="row">
          <div class="col-8 offset-4">{/* <h2>Sign Up</h2> */}</div>
          <StyleHeding name="Reset Password"></StyleHeding>
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
        <StylishButton btnName="Reset Password"></StylishButton>
      </div>
    </div>
  );
}

export default ResetPassword;