import React, {useState}from "react";

export default function Login() {
  const initialState = {email:"", password: ""}
  
  // Destructure state and setState from the useState hook
  const [state, setState] = useState(initialState);
  
  // Define isProcessing state and setIsProcessing setter function
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = e =>{
    setState(prevState => ({...prevState,[e.target.name]:e.target.value}))
  }
  
  const handleLogin = (e) =>{
    e.preventDefault()
    let {email, password} = state

    setIsProcessing(true)
    console.log(email);
    console.log(password);
    setIsProcessing(false);
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
              <form onSubmit={handleLogin}>
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
                  <button className="btn w-100" disabled={isProcessing}>
                    {!isProcessing
                      ? "Login"
                      : <div className="spinner-grow spinner-grow-sm"></div>
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
