import React from 'react'
import mainImg from '../Assets/trust5.png'
import businessImg from '../Assets/trust4.png'
import faketownImg from '../Assets/trust3.png'
import remoteImg from '../Assets/trust2.png'
import kickImg from '../Assets/trust1.png'


function TrustedBrands() {
  return (
    <div className="w-100 mx-auto mt-5" style={{ backgroundColor: "#F7F6FD" }}>
      <div className="text-center">
        <img src={mainImg} alt="" />
      </div>
      <div className="d-flex justify-content-between align-items-center mt-5  ">
        <div className='mx-auto'>
          <img src={businessImg} alt="" />
        </div>
        <div className='mx-auto'>
          <img src={faketownImg} alt="" />
        </div>
        <div className='mx-auto'>
          <img src={remoteImg} alt="" />
        </div>
        <div className='mx-auto'>
          <img src={kickImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TrustedBrands