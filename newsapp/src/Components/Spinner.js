import React from 'react'
import loadImg from './loading.gif'

const Spinner = () => {

    return (
        <div className='text-center'>
            <img className='my-3' src={loadImg} alt="loading" />
        </div>
    )

}

export default Spinner