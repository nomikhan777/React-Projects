import React,{useReducer,createContext} from 'react'

export const AuthContext = createContext();

const initialState = {isAuthenticated: false}

const reducer = ((state,action)=>{
    // console.log(state)
    // console.log(action)
    switch (action.type){
        case "LOGIN ":
            return {isAuthenticated : true}
            
            case "LOGOUT":
              return   {isAuthenticated: false}

                default:
                 return state   
    }
    
})

export default function AuthContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {props.children}
    </AuthContext.Provider>
  )
}
