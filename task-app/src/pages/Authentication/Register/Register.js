import React,{useState}from 'react'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore/lite';
import { auth , firestore} from '../../../config/firebase';
export default function Register() {
  
      const initialState = {email:"", password: ""}
      
      // Destructure state and setState from the useState hook
      const [state, setState] = useState(initialState);
      
      // Define isProcessing state and setIsProcessing setter function
      const [isProcessing, setIsProcessing] = useState(false);
    
      const handleChange = e =>{
        setState(prevState => ({...prevState,[e.target.name]:e.target.value}))
      }
      
      const handleRegister = (e) =>{
        e.preventDefault()

        let {email, password} = state
    
        setIsProcessing(true)

        createUserWithEmailAndPassword( auth, email, password)
        .then((userCredential)=>{
          let user = userCredential.user
          addDocument(user)
          console.log("user created")
        })
        .catch(err=>{
          console.error(err)
        })

        .finally(()=>{

          setIsProcessing(false);

        })
        
      }

      const addDocument = async(user) => {
        await setDoc(doc(firestore, "users", user.uid), {
          firstName: "",
          lastName:"",
          uid: user.uid,
        });
        console.log("user document created at firestore")

      }
    
      return (
        <div className="auth">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div className="card p-2 p-md-3 p-lg-5">
                  <div className="row">
                    <div className="col">
                      <h3 className="mb-4">REGISTER</h3>
                    </div>
                  </div>
                  <form onSubmit={handleRegister}>
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
                          ? "Register"
                          : <div className="spinner-grow spinner-grow-sm"></div>
                        }
                      </button>
                    </div>
                  </div>
                  </form>
                  <div className="row mt-4">
                <div className="col">
                  <p className="mb-0 text-center">Already have an account ? <Link to="/authentication/login" className="text-dark"> 
                  Login</Link></p>

                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
  

