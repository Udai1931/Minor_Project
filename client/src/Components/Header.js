import React from 'react'
import img from '../static/stock7.jpg'

function Header() {
    return (
        <>
        <div className="top-div w-full" style={{height:'100vh'}}>
            <img src={img} className="w-full h-full"/>
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center ">

            <div className="text-5xl font-extrabold text-white">WELCOME</div>
            <div className="text-lg font-bold text-white mt-3">We Predict The Future For You</div>
            <button className="bg-purple-700 text-white px-6 py-3 mt-3 font-bold rounded-3xl">CHECK STOCKS</button>

        </div>
        </>
    )
}

export default Header
