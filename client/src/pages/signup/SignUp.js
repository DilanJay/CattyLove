import React, { useState, useEffect } from "react";
import StyleHeding from "../../component/honeheader/StyleHeding";
import StylishButton from "../../component/stylishButton/StylishButton";
import "./SignUp.css";
import axios from "axios";
import { APIURI } from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
function SignUp({ history }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [profession, setProfession] = useState("");
  const [error, setError] = useState("");

  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    console.log(localStorage.getItem("authToken"));
    if (localStorage.getItem("authToken")) {
      toast.info(
        "You have already logged in. Please log out before log in again",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  }, []);

  const registerHandler = async (e) => {
    e.preventDefault();

    if (localStorage.getItem("authToken")) {
      toast.info(
        "You are already log in, please log out before login again..",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }

    if (password !== confirmpassword) {
      setConfirmPassword("");
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (
      username === "" ||
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      password === "" ||
      contactNumber === "" ||
      gender === "" ||
      birthday === "" ||
      profession === ""
    ) {
      toast.error("Fill all the field", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    try {
      const result = await axios.post(
        `${APIURI}/auth/register`,
        {
          username,
          email,
          firstName,
          lastName,
          password,
          contactNumber,
          gender,
          birthday,
          profession,
        },
        config
      );

      if (result.data.status === "OK") {
        toast.success("Successfully Sign Up", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setUsername("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setContactNumber("");
        setGender("");
        setBirthday("");
        setProfession("");
        setError("");
        setPassword("");
        setConfirmPassword("");
      } else if (result.data.status === "error") {
        toast.error(result.data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("Somthing wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error);
    }
  };

  return (
    <>
      <div className="container emp-profile">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
        <div className="form-horizontal">
          <div className="row">
            <div className="col-8 offset-4">{/* <h2>Sign Up</h2> */}</div>
            <StyleHeding name="Sign UP"></StyleHeding>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Username</label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="username"
                required="required"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">First Name</label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="firstName"
                required="required"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Last Name</label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="lastName"
                required="required"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Email Address</label>
            <div className="col-8">
              <input
                type="email"
                className="form-control"
                name="email"
                required="required"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Contact Number</label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="contactNumber"
                required="required"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Gender</label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="gender"
                required="required"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Birthday</label>
            <div className="col-8">
              <input
                type="date"
                className="form-control"
                name="birthday"
                required="required"
                placeholder="Birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Profesion</label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="profesion"
                required="required"
                placeholder="Profesion"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Password</label>
            <div className="col-8">
              <input
                type="password"
                className="form-control"
                name="password"
                required="required"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Confirm Password</label>
            <div className="col-8">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                required="required"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-8 offset-4">
              <p>
                <label className="form-check-label">
                  <input type="checkbox" required="required" /> I accept the{" "}
                  <a href="#">Terms of Use</a> &amp;{" "}
                  <a href="#">Privacy Policy</a>.
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btncl fourth"
            style={{ display: "inline-block !important" }}
            onClick={registerHandler}
          >
            Sign UP
          </button>
        </div>

        <div className="text-center">
          Already have an account? <Link to="/signin">Login here</Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
