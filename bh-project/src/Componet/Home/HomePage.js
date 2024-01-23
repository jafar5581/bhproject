import React from "react";
//image front skf
// import HomeImg from "../Home/Assets/bh-Front-pic1.jpg"
//IMAGE DEKSTOP FRONT PIC
import HomeImgDek from "../Home/Assets/dek-fontpic1.jpg"
//ALL LOGO 
// import AllLogo from "../Home/Assets/alllogo.jpg"
import Category from "../Catageory/catageory";
import FoundationPage from "../Catageory/FoundationCat";


function HomePage() {

    return (
        <div>
            <br />

            <div className="md:hidden">    {/* PHONE FORNT PHOTO */}
                {/* <img src={HomeImg}/> */}
                {/* <img src="https://scontent.fpnq16-1.fna.fbcdn.net/v/t39.30808-6/410841919_761525109348547_1834587809107282881_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=bN8PpWrH79kAX--33xf&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfB03lp00ddyblGNzS66Yy6-I8t3l7cSnNKuWK_1XKrgiA&oe=658B33E3"/> */}
            </div>    {/* PHONE FORNT PHOTO */}



            <div className="">    {/* DEKSTOP FORNT PHOTO */}
                <img src={HomeImgDek}/>
                
            </div>    {/* DEKSTOP FORNT PHOTO */}




            <Category />
            <FoundationPage />

        </div>
    )
}
export default HomePage