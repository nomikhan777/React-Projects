import React from "react";
import home from "../Assets/img2.jpg";

function Home() {
  return (
    <div className="w-75 mx-auto">
      <div className="d-flex justify-content-between align-items-center">
        <div className="">
          <h1 className="display-2">
            Reach More <br />{" "}
            <span style={{ color: "#5A29A7" }}>Customers,</span> <br />
            Get More <span style={{ color: "#5A29A7" }}>Sales!</span>
          </h1>
          <button className="mt-5 btn btn-outline-primary">
            Warm - up my email{" "}
          </button>
        </div>
        <div>
          <img src={home} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
