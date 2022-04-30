import React, { useEffect, useState } from "react";
import StylishButton from "../stylishButton/StylishButton";
import "../stylishButton/StylishButton.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { APIURI } from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Imagetable = (props) => {
  debugger;
  const [allCats, setAllCats] = useState([]);
  const API = "http://localhost:5200/api/cat/";
  const [forWislistTable, setForWislistTable] = useState(false);
  const nav = useNavigate();

  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    if (props.loadtype === "All") {
      fetchAllCats();
    } else if (props.loadtype === "whislist") {
      fetchWishlistCats();
    }
  }, []);

  async function fetchAllCats() {
    try {
      if (props.loadtype === "All") {
        let response = await axios(API);
        let cat = await response.data;
        setAllCats(cat);
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
    }
  }

  async function fetchWishlistCats() {
    try {
      if (props.loadtype === "whislist") {
        if (
          localStorage.getItem("authToken") &&
          localStorage.getItem("currentSessionUserID")
        ) {
          let userId = localStorage.getItem("currentSessionUserID");
          const result = await axios.get(
            `${APIURI}/wishlist/${userId}`,
            config
          );
          console.log("wislist current user", result);
          if (result.data.data.length === 0) {
            toast.info("Your cat wishlist is empty", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          setForWislistTable(true);
          setAllCats(result.data.data);
        }
      } else {
        toast.error("Somthing wrong", {
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
    }
  }

  const viewSpecifiCathandler = async (e) => {
    try {
      nav(`/catprofile/${e}`);
    } catch (error) {}
  };

  const removeSpecifiCathandler = async (catId) => {
    try {
      if (window.confirm("Are you sure !")) {
        if (
          localStorage.getItem("authToken") &&
          localStorage.getItem("currentSessionUserID")
        ) {
          let userId = localStorage.getItem("currentSessionUserID");
          const result = await axios.post(
            `${APIURI}/wishlist/removecat/${userId}`,
            {
              userId,
              catId,
            },
            config
          );

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

            setTimeout(() => {
              window.location.reload();
            }, [2000]);
          } else if (result.data.status === "error") {
            toast.success(result.data.error, {
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
    <div className="container">
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
      <div className="row">
        <div className="col-12">
          <table className="table table-image">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">owner</th>
                <th scope="col">Breed</th>
                <th scope="col">Vacsinated</th>
                <th scope="col">Likes </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Action{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {allCats.map((cat, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="w-25">
                    <img
                      src={cat.imageUrl}
                      className="img-fluid img-thumbnail"
                      alt="cat"
                      style={{ width: "50%" }}
                    />
                  </td>
                  <td>{cat.name}</td>
                  <td>{cat.owner}</td>
                  <td>{cat.breed}</td>
                  <td>{cat.isVacsinated ? "Yes" : "No"}</td>
                  <td>{cat.likeCount}</td>
                  <td style={{ textAlign: "center" }}>
                    <div style={{ position: "relative !important" }}>
                      <button
                        className="btncl fourth"
                        style={{ display: "inline-block !important" }}
                        onClick={() => viewSpecifiCathandler(cat._id)}
                      >
                        View
                      </button>
                      {forWislistTable && (
                        <button
                          className="btncl fourth"
                          style={{ display: "inline-block !important" }}
                          onClick={() => removeSpecifiCathandler(cat._id)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Imagetable;
