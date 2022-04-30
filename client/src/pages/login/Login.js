import React, { useState, useEffect } from "react";
import StyleHeding from "../../component/honeheader/StyleHeding";
//import StylishButton from "../../component/stylishButton/StylishButton";
import "./Login.css";
import axios from "axios";
import { APIURI } from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogIn, setisLogIn] = useState(false);

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
      setisLogIn(true);
    } else {
      setisLogIn(true);
    }
  }, []);

  const signInHandler = async (e) => {
    try {
      e.preventDefault();

      if (username === "" || password === "") {
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

      const result = await axios.post(
        `${APIURI}/auth/login`,
        {
          username,
          password,
        },
        config
      );
      console.log("loging result", result);
      if (result.data.status === "OK") {
        toast.success("Successfully Sign in", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setUsername("");
        setPassword("");

        if (localStorage.getItem("authToken")) {
          localStorage.removeItem("authToken");
        }

        localStorage.setItem("authToken", result.data.data);

        if (
          localStorage.getItem("authToken") != null ||
          localStorage.getItem("authToken") !== undefined
        ) {
          setisLogIn(true);

          console.log(
            "Jwt-decode - ",
            jwt_decode(localStorage.getItem("authToken"))
          );

          let jwtDecode = jwt_decode(localStorage.getItem("authToken"));

          console.log("Jwt-decode and assign to variable - ", jwtDecode);

          localStorage.setItem("currentSessionUserID", jwtDecode.id);
          localStorage.setItem("currentSessionUsename", jwtDecode.username);
          setTimeout(() => {
            //navigate("/ ");
            //window.location.reload();
            window.location.href = "/";
          }, [2500]);
        }
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
      <div className="form-horizontal">
        <div className="row">
          <div className="col-8 offset-4">{/* <h2>Sign Up</h2> */}</div>
          <StyleHeding name="Sign In"></StyleHeding>
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
      </div>
      <div className="text-center">
        {/* <StylishButton btnName="Sign In"></StylishButton> */}
        <button
          className="btncl fourth"
          style={{ display: "inline-block !important" }}
          onClick={signInHandler}
        >
          Sign In
        </button>
      </div>
      <div className="text-center">
        Dont have an account? <Link to="/signup">Signup here</Link>
      </div>
    </div>
  );
}

export default Login;
