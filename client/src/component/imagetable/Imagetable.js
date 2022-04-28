import React, { useEffect, useState } from "react";
import StylishButton from "../stylishButton/StylishButton";
import axios from "axios";

const Imagetable = (props) => {
  const [allCats, setAllCats] = useState([]);
  const API = "http://localhost:5200/api/cat/";
  let isWislistTable = false;

  async function fetchAllCats() {
    console.log(props.loadtype);
    if (props.loadtype === "All") {
      let response = await axios(API);
      let cat = await response.data;
      setAllCats(cat);
    } else {
    }
  }

  useEffect(() => {
    fetchAllCats();
    console.log(allCats);
  }, []);

  return (
    <div className="container">
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
                      alt="Sheep"
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
                      <StylishButton
                        btnName="View"
                        style={{ display: "inline-block !important" }}
                      ></StylishButton>
                      {isWislistTable && (
                        <StylishButton
                          btnName="Remove"
                          style={{ display: "inline-block !important" }}
                        ></StylishButton>
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