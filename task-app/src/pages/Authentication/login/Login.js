import React, {useState}from "react";

export default function Login() {
  const initialState = {email:"", password: ""}

  const {state, seState} = useState(initialState);

  const handleChange = e =>{
    seState(s => ({...s,[e.target.name]:e.target.value}))
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
            <div className="card py-2 py-md-3 py-lg-5">
              <div className="row">
                <div className="col">
                  <h2>LOGIN</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input type="email" className="form-control" placeholder="Email" name="email" onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
