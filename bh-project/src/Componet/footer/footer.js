import React from "react";
//INSTAGRAM ICON
import { FaInstagram } from "react-icons/fa";
//FACEBOOK ICON
import { FaFacebook } from "react-icons/fa";
//TWITTER ICON
import { FaTwitter } from "react-icons/fa";
//YOUTUBE ICON
import { TiSocialYoutube } from "react-icons/ti";
import { Link } from "react-router-dom";

function FooterPage() {

    return (
        <div>
            <div className="text-center pt-8 ">
                <Link to='/' className="flex justify-center">
                    <img src="https://pictures.kartmax.in/live/original/0x0/sites/w0ACRcy407Pb14QWUoSQ/theme/logo-1be04ceb-fe98-4c85-8c57-e3bc8001f89e.jpg" alt="bhlogo" className="h-16" />
                </Link>
                <div className="text-[9px]">
                    <p>Being Human Clothing was founded in 2012 to further the objective of<br/>
                        Being Human - The Salman Khan Foundation, a charitable trust devoted to education and healthcare initiatives for the underserved population in India.</p>
                </div>
            </div>


            <div className="md:flex  md:justify-around py-8 border-t-2 mt-2">

                <div className="flex justify-center md:justify-start gap-24"> {/* FiRST MAIN DIV */}
                    <div>
                        <ul>
                            <li className="pb-1 text-[13px]"><b>ABOUT</b></li>
                            <li className="text-[10px] text-gray-500"><Link to="/about">ABOUT US</Link> </li>
                            <li className="text-[10px] text-gray-500"><Link to="/contact">CONTCAT  US</Link>  </li>
                            <li className="text-[10px] text-gray-500"><Link to="/storelocator">Store Locator</Link>  </li>
                        </ul>

                    </div>

                    <div>
                        <ul>
                            <li className="pb-1 text-[13px]"><b>SUPPORT</b></li>
                            <li className="text-[10px] text-gray-500"><Link to="/privacypolicy">Privacy Policy</Link> </li>
                            <li className="text-[10px] text-gray-500"><Link to="/shippingpolicy"> Shipping Policy</Link></li>
                            <li className="text-[10px] text-gray-500">Track Order</li>
                            <li className="text-[10px] text-gray-500">Return Policy</li>
                        </ul>
                    </div>

                </div> {/* FiRST MAIN DIV */}
                <div className="mt-5" >{/* SECOND MAIN DIV */}
                    <div className=" ml-5 md:ml-0 flex justify-center">
                        <input type="email" placeholder="Enter Email" className="outline-none  bg-slate-100 text-[10px] py-2 pr-24 pl-1" />
                        <button type="button" className="px-3 py-2 bg-gray-900 text-yellow-400 text-[10px]">SUBMIT</button>
                    </div>
                    <div className="mt-5">
                        <ul className="flex justify-center gap-4">
                            <li className="py-1 px-1 bg-yellow-400 text-black rounded-full"><FaFacebook /></li>
                            <li className="py-1 px-1 bg-yellow-400 text-black rounded-full"><FaInstagram /></li>
                            <li className="py-1 px-1 bg-yellow-400 text-black rounded-full"><FaTwitter /></li>
                            <li className="py-1 px-1 bg-yellow-400 text-black rounded-full"><TiSocialYoutube /></li>

                        </ul>
                      
                    </div>


                </div>{/* SECOND MAIN DIV */}
               
            </div>
            <ul className="py-2 text-center">
                            <li className="font-bold text-[10px] md:bg-white">DESIGN BY</li>
                            <li className="font-bold text-[9px] md:bg-white">JAFAR VAHID MULLA</li>
                        </ul>
        </div>
    )
}

export default FooterPage;