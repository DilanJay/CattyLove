import React, { useEffect, useState } from "react";
import StyleHeding from "../../component/honeheader/StyleHeding";
import Imagetable from "../../component/imagetable/Imagetable";

function Wishlist() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);
  return (
    <div className="container emp-profile">
      <StyleHeding name="Your Wishlist"></StyleHeding>
      {isUserLoggedIn ? (
        <Imagetable loadtype="whislist" />
      ) : (
        <div className="text-center">
          <h3>You are not logged in please login to view your wishlist</h3>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
