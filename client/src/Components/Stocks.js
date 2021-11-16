import React from 'react'
import img from '../static/about.jpg'

function Stocks() {
    return (
        <div class="flex flex-col items-center justify-center h-screen px-40 mt-20 mb-20 ">
            <div class="text-center mb-20">
                <p class="mt-10 text-sm leading-7 text-gray-500 font-regular uppercase">
                    PREDICT
                </p>
                <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                    The  <span class="text-purple-600">Stocks</span>
                </h3>
            </div>
            <div className="flex justify-center items-center w-full h-3/6">
                <div className="flex justify-center items-center w-3/6 h-full text-center">
                    <img src={img} className="p-10"/>
                </div>
                <div className="flex flex-col justify-center items-start  w-3/6 h-full">
                    <h1 className="font-bold text-3xl m-4">For the next great business</h1>
                    <p className="px-4 py-4">Try checking predictions of any of these companies and Invest smartly with us.</p>
                    <ol className="m-10 mt-2">
                        <li className="m-4">➫&nbsp;&nbsp;&nbsp;Tesla</li>
                        <li className="m-4">➫&nbsp;&nbsp;&nbsp;AMD</li>
                        <li className="m-4">➫&nbsp;&nbsp;&nbsp;Google</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Stocks
