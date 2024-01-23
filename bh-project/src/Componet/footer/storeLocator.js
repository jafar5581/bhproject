
import React from "react";
import { Link } from "react-router-dom";
//LINK ICON
import { IoLocation } from "react-icons/io5";
//PHONE ICON
import { FaPhoneAlt } from "react-icons/fa";

function StoreLocator() {

    return (
        <div className=" px-2 md:px-12">
            <h1 className="text-center font-bold py-8">STORE LOCATOR</h1>
            <div className=" md:flex justify-center gap-3">
                <div>
                    <div>
                        <div className="flex items-center">
                          <p className="py-1 px-1 border-2 text-black rounded-full"><IoLocation size={10} /></p>  
                            <h6 className="font-bold text-[12px] pl-1">BH - Kolhapur</h6>
                        </div>
                        <p className="text-[9px]">1801, E, 2ND LANE, RAJARAMPURI (E),1801, E, 2nd Lane, Rajarampuri (E),</p>
                        <div className="flex items-center">
                            <FaPhoneAlt size={9} />
                            <p className="text-[9px] pl-1"> 0187-1500711</p>
                        </div>

                        <p className="text-[9px]"> Get Directions</p>
                        <div className="flex items-center">

                            <p className="text-[9px]"> what3words:</p>


                            <Link to="https://what3words.com/delight.daydream.passports" className="text-[9px] text-blue-500"> ///nozzles.derailed.relate</Link>

                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                        <p className="py-1 px-1 border-2 text-black rounded-full"><IoLocation size={10} /></p> 
                            <h2 className="font-bold text-[12px] pl-1">BH - PMC Pune</h2>
                        </div>
                        <p className="text-[9px]">Unit no G-27/B, Lower Ground Floor Phoenix Marketcity, S.No-207 Viman Nagar, Nagar Road</p>
                        <div className="flex items-center">
                        <FaPhoneAlt size={9} />
                            <p className="text-[9px] pl-1"> 0187-1500738</p>
                        </div>
                        <p className="text-[9px]"> Get Directions</p>
                        <div className="flex items-center">
                            <p className="text-[9px]">what3words:</p>
                            <Link to="https://what3words.com/roof.cheaper.regulates" className="text-[9px] text-blue-500"> ///adverbs.resist.publisher</Link>

                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                        <p className="py-1 px-1 border-2 text-black rounded-full"><IoLocation size={10} /></p> 
                        <h2 className="font-bold text-[12px] pl-1">BH - Westend Pune</h2>
                        </div>
                        <p className="text-[9px]">SHOP NO GFS-11B, WESTEND MALL, PARIHAR CHAUK, AUNDH</p>
                        <div className="flex items-center">
                        <FaPhoneAlt size={9} />
                        <p className="text-[9px] pl-1"> 0187-1500711</p>
                        </div>
                       
                      <p className="text-[9px]"> Get Directions</p>
                        <div>
                            <div className="flex items-center">
                                <p className="text-[9px]">what3words:</p>
                                <Link to="https://what3words.com/adverbs.resist.publisher" className="text-[9px] text-blue-500"> ///adverbs.resist.publisher</Link>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                        <p className="py-1 px-1 border-2 text-black rounded-full"><IoLocation size={10} /></p> 
                        <h2 className="font-bold text-[12px] pl-1">BH - Triton Jaipur</h2>
                        </div>
                     
                        <p className="text-[9px]">Shop No : G 04, Triton Mall "Jhotwara Road, Jhotwara</p>
                        <div className="flex items-center">
                        <FaPhoneAlt size={9} />
                        <p className="text-[9px] pl-1"> 0187-1500728</p>
                        </div>
                       
                        <p className="text-[9px]"> Get Directions</p>
                        <div>
                            <div className="flex items-center">
                                <p className="text-[9px]">what3words:</p>
                                <Link to="https://what3words.com/marriage.bother.steepest" className="text-[9px] text-blue-500">  ///mildest.loss.exhaling</Link>

                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="md:hidden text-center font-bold mt-3">MAP</h1>
                <div className="mt-1 md:mt-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765336.148763806!2d61.02291715666863!3d19.732445881430763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1701240257318!5m2!1sen!2sin" width="500" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-[95vw] md:w-[50vw]"></iframe>
                </div>
            </div>

        </div>
    )
}

export default StoreLocator;