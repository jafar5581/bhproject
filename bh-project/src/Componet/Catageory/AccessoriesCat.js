import React from "react";

//CAP PIC
import CatPic from './Assets/capcat.jpg'
//MASK PIC
import MaskPic from './Assets/maskCat.jpg'
//BELT pic
import Beltpic from './Assets/beltcat.jpg'
//FREE BAND PIC
import Bh_band from './Assets/bh-band.png'
import { Link } from "react-router-dom";


function AccessoriesCat() {


    return (
        <div>

            <img src={Bh_band} className="md:hidden" />
            <h1 className="text-center text-2xl">Accessories</h1>

            <div className=" px-5 grid md:grid-cols-3 gap-3 md:px-10 bg-gray-1-00">
                <Link to="/accessoriesmask">
                    <img src={MaskPic} className="  md:h-[350px]" />
                    <p className="text-center font-mono text text-xl">BH-MASK</p>
                </Link>
                <Link to="/accessoriescap">
                    <img src="https://i.postimg.cc/BnBpf8jf/capcat.jpg" className=" md:hidden
                      md:h-[350px] "  />
                    <img src="https://i.postimg.cc/BnBpf8jf/capcat.jpg" className="hidden lg:block lg:h-[350px]" />
                    <p className="text-center font-mono text text-xl">BH-CAP</p>
                </Link>

            </div>
            <div>
                <img src="https://scontent.fbom66-1.fna.fbcdn.net/v/t39.30808-6/282191210_5484337304930728_8652300743694850964_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=vKVBbC8jzAUAX_pC2uT&_nc_ht=scontent.fbom66-1.fna&oh=00_AfC4Bx4bmXT91duUMxPCcpvIBZDEOrntzSVGaeFaXzAlqw&oe=65730B190" className="md:hidden"/>
                
            </div>
        </div>
    )
}

export default AccessoriesCat;