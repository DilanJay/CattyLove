import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom"; // dome v6
import Commentbox from "../../component/commentbox/Commentbox";
import StyleHeding from "../../component/honeheader/StyleHeding";
import StylishButton from "../../component/stylishButton/StylishButton";
import "./CatProfile.css";
import axios from "axios";
import { APIURI } from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
//https://stackoverflow.com/questions/65576997/how-to-pass-id-from-one-component-to-another-component-onclick-of-an-element
function CatProfile() {
  const [cat, setCat] = useState({});
  const [isLogIn, setisLogIn] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  const {
    params: { id },
  } = useMatch("/catprofile/:id");
  console.log(id);

  //console.log(e);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setisLogIn(true);
    }
    if (id != null) {
      fetchCatData();
    } else {
    }
  }, [id]);

  async function fetchCatData() {
    try {
      const result = await axios.get(`${APIURI}/cat/${id}`, config);
      console.log("cat result", result);
      if (result.data.status === "OK") {
        setCat(result.data.data);
        let catObjectArray = [];
        if (result.data.data != null) {
          catObjectArray = result.data.data.likes;
        }
        let catObj = catObjectArray.find((o) => o === id);

        if (catObj != null) {
          setIsLiked(true);
        }
      } else {
        toast.error("something went wrong", {
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
      toast.error("something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const addToWisListHandler = async (catId) => {
    try {
      if (window.confirm("Are you sure !")) {
        if (
          localStorage.getItem("authToken") &&
          localStorage.getItem("currentSessionUserID")
        ) {
          let userId = localStorage.getItem("currentSessionUserID");
          const result = await axios.post(
            `${APIURI}/wishlist/${userId}`,
            {
              userId,
              catId,
            },
            config
          );
          console.log("result", result);
          if (result.data.status === "OK") {
            toast.success("Successfully remove", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
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
        }
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

  const addLikeHandler = async (catId) => {
    try {
      if (window.confirm("Are you sure !")) {
        if (
          localStorage.getItem("authToken") &&
          localStorage.getItem("currentSessionUserID")
        ) {
          let userId = localStorage.getItem("currentSessionUserID");
          const result = await axios.put(
            `${APIURI}/cat/like/${catId}`,
            {
              likeCount: 1,
              userId,
              catId,
            },
            config
          );
          console.log("result", result);
          if (result.data.status === "OK") {
            toast.success("liked", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setIsLiked(true);
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
        }
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
  const adddisLikeHandler = async (catId) => {
    try {
      if (window.confirm("Are you sure !")) {
        if (
          localStorage.getItem("authToken") &&
          localStorage.getItem("currentSessionUserID")
        ) {
          let userId = localStorage.getItem("currentSessionUserID");
          const result = await axios.put(
            `${APIURI}/cat/like/${catId}`,
            {
              likeCount: 1,
              userId,
              catId,
            },
            config
          );
          console.log("result", result);
          if (result.data.status === "OK") {
            toast.success("disliked", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setIsLiked(false);
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
        }
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
      <StyleHeding name="Cat Profile"></StyleHeding>
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                className="img-fluid img-thumbnail shadow"
                src={cat.imageUrl}
                alt=""
              />
              {/* <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{cat.name}</h5>
              <h6>{cat.breed}</h6>
              <p className="proile-rating">
                LIKES : <span>{cat.likeCount}</span>
              </p>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              {isLogIn === false ? (
                <>
                  <br />
                  <h5>
                    <b>
                      To like, dislike and <br />
                      add to wishlist, please login
                    </b>
                  </h5>
                </>
              ) : (
                <>
                  <button
                    className="btncl fourth"
                    onClick={() => addToWisListHandler(cat._id)}
                  >
                    Add to Wishlist +
                  </button>
                  {isLiked === false ? (
                    <>
                      <button
                        className="btncl fourth"
                        onClick={() => addLikeHandler(cat._id)}
                      >
                        Like 👍
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btncl fourth"
                        onClick={() => adddisLikeHandler(cat._id)}
                      >
                        Dis-Like 👎
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Cat Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>{cat._id}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{cat.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Birth Year</label>
                  </div>
                  <div className="col-md-6">
                    <p>{cat.birthYear}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Vacsinated</label>
                  </div>
                  <div className="col-md-6">
                    <p>{cat.isVacsinated ? "Yes" : "No"}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Gender</label>
                  </div>
                  <div className="col-md-6">
                    <p>{cat.gender}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Adress</label>
                  </div>
                  <div className="col-md-6">
                    <p>Kurunegla, Srilanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=kurunegala&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="aaaa"
          ></iframe>
          {/* <a href="https://fmovies-online.net"></a> */}
          <br />
        </div>
      </div>
      <br />
      <Commentbox comentObject={cat.comment} catId={cat._id}></Commentbox>
    </div>
  );
}

export default CatProfile;
