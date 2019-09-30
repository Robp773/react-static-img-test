import React from "react";

import img from "./images/img.png";
import img6 from "./images/img2.png";
import img2 from "./images/vsmall-logo.jpg";
import img3 from "./images/transparent-logo.png";
import img4 from "./images/linkedin-logo-large.png";
import img5 from "./images/linkedin-logo.png";

export default () => (
  <div style={{ textAlign: "center" }}>
    <h1>Welcome to React-Static</h1>
    <div>
      <h3>Missing</h3>

      {/* 754 KB | 2968 x 1730 | PNG*/}
      <img className="img" src={img} />

      {/* 47 KB | 371 x 217 | PNG - smaller version of above image*/}
      <img className="img" src={img6} />

      {/* 32.7 KB | 123 x 27 | JPG */}
      <img className="img" src={img2} />

      {/* 10.7 KB | 256 x 256 | PNG */}
      <img className="img" src={img4} />
      
    </div>

    <div>
      <h3>Working</h3>

      {/* 7.37 KB | 796 x 414 | PNG  */}
      <img className="img" src={img3} />

      {/* 1.1 KB | 64 x 64 | PNG  */}
      <img className="img" src={img5} />

    </div>
  </div>
);
