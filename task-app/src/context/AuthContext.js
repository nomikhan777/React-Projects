import React,{useReducer,useEffect,createContext} from 'react'
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

const initialState = {isAuthenticated: false}

const reducer = ((state,action)=>{
    // console.log(state)
    // console.log(action)
    switch (action.type){
        case "LOGIN":
            return {isAuthenticated : true}
            
            case "LOGOUT":
              return   {isAuthenticated: false}

                default:
                 return state   
    }
    
})

export default function AuthContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect (() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log(user)
          console.log("user is signed in ")
          dispatch({type: "LOGIN", payload:{ user }})

          // ...
        } else {
          console.log("user is sign out ")
          // ...
        }
      });
      


    },[])

  return (
    <AuthContext.Provider value={{authentication:state, dispatch}}>
      {props.children}
    </AuthContext.Provider>
  )
}
