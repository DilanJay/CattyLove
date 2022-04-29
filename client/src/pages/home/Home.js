import React , { useEffect } from "react";
import StyleHeding from "../../component/honeheader/StyleHeding";
import Imagetable from "../../component/imagetable/Imagetable";

function Home() {
  useEffect(() => {}, []);
  return (
    <div className="container emp-profile">
      <StyleHeding name="Cat List"></StyleHeding>
      <Imagetable loadtype="All" />
    </div>
  );
}

export default Home;