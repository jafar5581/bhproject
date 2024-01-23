import React from "react";
import Helthcare from './Assets/foundationHealthcare.jpg'
import Education from './Assets/foundationEducation.jpg'
import Video from './Video/Being Human reflection.mp4'

function FoundationPage() {



    return (
        <div>
         <div className=" w-full">
            <video className="h-full w-full border" loop muted autoPlay src={Video}/>
         </div>

            <h1 className="text-center bg-black text-white mb-1 ">A CONNET BEING HUMAN</h1>
            <div className=" grid grid-cols-2 gap-2 lg: mr-3 ml-3">

                <div  >

                    <img src={Helthcare} className="lg:h-[450px]  w-full" style={{ backgroundPosition: "cover" }} />
                    <h2 className="text-2xl text-center text-white bg-black">HEALTHCARE</h2>
                </div>
                <div  >

                    <img src={Education} className="lg:h-[450px]  w-full" style={{ backgroundPosition: "cover" }} />
                    <h2 className="text-2xl text-center text-white bg-black">EDUCATION</h2>
                </div>


            </div>
            <div className="mt-5 lg:mt-2">
                <img src="https://pictures.kartmax.in/live/original/0x0/sites/w0ACRcy407Pb14QWUoSQ/theme/bh-children(1)-6ee64238-5654-41c1-8b3c-b1d1f364e719.jpg" />
            </div>

            <div className="md:flex justify-around px-28">    {/* freeshiping 3 div cart */}

                <div className="text-center">
                    <div className="flex justify-center">
                        <img src="https://pictures.kartmax.in/live/original/0x0/sites/w0ACRcy407Pb14QWUoSQ/theme/fast-1340675c-895d-40af-a894-454b7d79e449.jpg" className="h-10" />
                    </div>
                    <h3 className="text-center font-bold">Free Shipping</h3>

                    <p className="text-[9px] text-gray-700 ">We deliver our products right at<br />
                        your doorstep with the utmost care<br />
                        , love, not to mention free shipping</p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center pt-3">
                        <img src="https://pictures.kartmax.in/sites/w0ACRcy407Pb14QWUoSQ/theme/quality-38e9e69b-a8f7-436e-b695-c8601b82b664.jpg" className="h-7" />
                    </div>
                    <h3 className="text-center font-bold">High quality, Unbeatable value</h3>
                    <p className="text-[9px] text-gray-700">Our high-end fabric is everything you<br/>
                        desire for your everyday comfort<br/>
                        and fashion declaration.</p>
                </div>

                <div className="text-center">
                    <div className="flex justify-center pt-4">
                        <img src="https://pictures.kartmax.in/live/original/0x0/sites/w0ACRcy407Pb14QWUoSQ/theme/exchange-dd48d874-d0e9-4fa1-946b-24f11f0a44dd.jpg"className="h-5"/>
                    </div>
                    <h3 className="text-center font-bold">Easy Exchange</h3>
                    <p className="text-[9px] text-gray-700">Your shopping experience is made<br/>
                        supremely easy and comfortable when it<br/>
                        comes to exchanging products</p>
                </div>

            </div>    {/* freeshiping 3 div cart */}

        </div>
    )



}

export default FoundationPage