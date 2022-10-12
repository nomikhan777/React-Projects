import React from 'react'
import mailIMG from '../Assets/Group 946.png'
import mailIMG2 from '../Assets/Group 976.png'

function Email() {
  return (
    <div className="mt-5 w-100 ">
      <div>
        <h1 className="text-center my-5">
          Why do you need to warm-up your email domain?
        </h1>
      </div>

      <div className=" d-flex justify-content-between align-items=center mt-5">
        <div className="m-5">
          <img src={mailIMG} alt="" />
        </div>

        <div className="m-5">
           {/* className="d-flex justify-content-end mx-5 my-5 w-75" */}
            <h4>Without email warm-up</h4>
          
          <img src={mailIMG2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Email