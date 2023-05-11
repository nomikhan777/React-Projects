import React, {useState}from "react";

export default function Login() {
  const initialState = {email:"", password: ""}

  const {state, setState} = useState(initialState);

  const handleChange = e =>{
    setState(s => ({...s,[e.target.name]:e.target.value}))
  }
  const handleLogin = (e) =>{
    e.preventDefault()
    let {email, password} = state

    console.log(email);
    console.log(password);



  }
  return (
    <div className="auth">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <div className="card p-2 p-md-3 p-lg-5">
              <div className="row">
                <div className="col">
                  <h3 className="mb-4">LOGIN</h3>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" placeholder="Email" name="email" onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" placeholder="Password" name="password" onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
