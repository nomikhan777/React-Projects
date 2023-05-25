import React, { useState } from "react";

const initialState = {
  title: "",
  location: "",
  description: "",
};

export default function Hero() {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = e =>{
    setState(s => ( {...s,[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  };
  return (
    <div className="py-5 home">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-3 p-md-4 p-lg-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <h2 className="text-center mb-4">Add Todo</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <input type="text" className="form-control" name="title" placeholder="Enter Title" onChange={handleChange} />
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <input type="text" className="form-control" name="location" placeholder="Enter location" onChange={handleChange} />
                  </div>
                </div>
                
                

                <div className="row mb-4">
                  <div className="col">
                    <textarea name="description" className="form-control"  rows="5" placeholder="Enter Description" onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className="row">
                    <div className="col">
                   <button className="btn btn-danger w-100" disabled={isProcessing}>
                    {
                        !isProcessing
                         ? "Add Todo"
                          : <div className="spinner-border spinner-border-sm"></div>
                    }
                   </button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
