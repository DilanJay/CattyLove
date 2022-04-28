import React from "react";
import StyleHeding from "../../component/honeheader/StyleHeding";
import Imagetable from "../../component/imagetable/Imagetable";

function Wishlist() {
  return (
    <div className="container emp-profile">
      <StyleHeding name="Your Wishlist"></StyleHeding>
      <Imagetable loadtype="All" />
    </div>
  );
}

export default Wishlist;
