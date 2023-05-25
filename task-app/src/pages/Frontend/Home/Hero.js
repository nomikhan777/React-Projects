import React, { useState} from 'react'

const initialState = {
    title :"",
    location:"",
    description:""

}

export default function Hero() {
    const [state, setState] = useState(initialState)



    const handleSubmit = e =>{
        e.preventDefault();

        console.log("working")
    }
  return (
    <div className='py-5'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <form onSubmit={handleSubmit}>
                           <h1 className="text-center">Add Todo</h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
