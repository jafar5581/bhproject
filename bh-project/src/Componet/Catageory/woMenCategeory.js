import React from "react";

//WOMEN headerpic
import WomenHeaderpic from './Assets/womenCatHeaderpic.jpg'

import { Link } from "react-router-dom";

function WomenCat() {


    return (
        <div>

          
            <h1 className="text-center text-2xl">WOMEN</h1>
            <div className="grid grid-cols-1 gap-2 px-12 md:grid-cols-3 ">
                <Link to="/womentshirt">
                    <img src="https://i.postimg.cc/4y9Grknx/293043756-5565515753461621-2810357827957393313-n.jpg" className="  h-[320px] w-[320px] md:px:1 md:h-[380px] lg:h-[60vh]" />
                    <p className="text-center font-mono text text-xl  bg-slate-700 text-white ">WOMEN T-SHIRT</p>
                </Link>
                <Link to="/womenjean">
                    <img src="https://i.postimg.cc/JzxX0w6Q/87655565-3098128626884953-2691957459567771648-n.jpg" className="  h-[320px] w-[320px] md:px:1 md:h-[350px] lg:h-[60vh] " />
                    <p className="text-center font-mono text text-xl  bg-slate-700 text-white ">WOMEN JEANS</p>
                </Link>
                <Link to="/womenjacket">
                    <img src="https://i.postimg.cc/T3dmmt3B/Women-Jacketcat.jpg" className="  h-[320px] w-[320px] md:px:1 md:h-[350px] lg:h-[60vh] " />
                    <p className="text-center font-mono text text-xl  bg-slate-700 text-white ">WOMEN JACKET</p>
                </Link>
              
            </div>
            <br></br>
            
        </div>
    )

}
export default WomenCat