import React from "react";


function Home() {
  return (
    <div
      className="container mt-5 p-5 w-100 shadow p-3 mb-5 bg-body rounded"
      style={{
        backgroundColor: "gray",
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_960_720.jpg")`,
      }}
    >
      <div className="d-flex justify-content-center flex-column  align-items-center ">
        <h1 className="bg-light p-5">Hello,React!</h1>

        <p className="bg-light p-5">
          This is a simple react app , which is front-end of the web development
          of the process
        </p>
        <button className="btn btn-primary">Learn more</button>
      </div>
    </div>
  );
}

export default Home;
