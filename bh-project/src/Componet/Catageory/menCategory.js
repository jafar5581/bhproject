import React from "react";

//HEADER IMAGE
import Bh_header from './Assets/menCatHeaderpic.jpg'


import { Link } from "react-router-dom";





function MenCategeory() {

    return (
        <div >



            <div className="md:hidden">

                <img src={Bh_header} height={75} />


            </div>
            <h1 className="text-center text-2xl">MEN</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3   lg:px-5 lg:gap-3">
                <Link to="/mentshirt">
                    <img src="https://i.postimg.cc/05bXvfck/288141172-5548724301825361-6009920428877108176-n.jpg" className=" h-[250px] w-[320px] md:h-[350px] lg:h-[55vh] md:w-[full]" />
                    <p className="text-center font-mono text text-xl  bg-slate-700 text-white">MEN T-SHIRT</p>
                </Link>
                <Link to="/menshirt">
                    <img src="https://i.postimg.cc/zG5kySSR/312981954-5970364872994633-2611286348535016027-n.jpg" className=" h-[250px] w-[320px] md:h-[350px] lg:h-[55vh] " />
                    <p className="text-center font-mono text text-xl  bg-slate-700 text-white">MEN SHIRT</p>
                </Link>
                <Link to="/menjean">
                    <img src="https://i.postimg.cc/V65JT3fc/313402674-5965013750196412-8374388967255627353-n.jpg" className=" h-[250px] w-[320px] md:h-[350px] lg:h-[55vh]" />
                    <p className="text-center font-mono text text-xl  bg-slate-700 text-white ">MEN JEANS</p>
                </Link>
                <Link to="/menjacket">
                    <img src="https://i.postimg.cc/BncMpwQg/315978880-5996243310406789-9070217890438776972-n.jpg" className=" h-[250px] w-[320px] md:h-[350px] lg:h-[55vh] " />
                    <p className="text-center font-mono text text-xl  bg-slate-700 text-white">MEN JACKET</p>

                </Link>



            </div>

            <img src="https://scontent.fbom66-1.fna.fbcdn.net/v/t39.30808-6/274794907_5241884069176054_8821014039131511557_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=J9fIViVOx_wAX9TeW-2&_nc_ht=scontent.fbom66-1.fna&oh=00_AfC89PKGt6ttIsBj1Cpl-3gqW49aqqg7vOateK_wjPO7Sg&oe=6573EA93" className=" w-full mt-1 md:hidden" />
        </div>
    )
}

export default MenCategeory;