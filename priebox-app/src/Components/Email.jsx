import React from 'react'
import mail from '../Assets/Email.png'

function Email() {
  return (
      <div className='mt-5 w-75 mx-auto'>
          <div>
        <h1 className='text-center'> Why do you need to warm-up your email domain?</h1>
          </div>
          <div>
              <img src={mail} alt="" />
          </div>
    </div>
  )
}

export default Email