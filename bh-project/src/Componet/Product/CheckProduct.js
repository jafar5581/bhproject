import React from "react";

//ADD CIRCLE LOGO ICON
import { FaRegCircle } from "react-icons/fa";
//
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation } from "react-router-dom";
//



function CheckProduct() {

    const location = useLocation()
    
     const product = location.state ;

//    const [CheckProduct,setCheckProduct]=React.useState([])
  

    return (
        <div>
            <h1>CheckProduct</h1>
          
                        <div className="h-[145vh] w-[100%]  md:flex justify-center  ">
                        <div className="h-[52vh] w-[100vw]   lg:h-[92vh] lg:w-[40vw] px-6">
                            <img src={product.img} className="h-[50vh] w-[80vw] lg:h-[90vh] lg:w-[40vw] " />
                        </div>
        
                        <div className=" h-[50vh] w-[100vw]  lg:h-[92vh] lg:w-[40vw] px-6  md:mt-5">
                            <h1 className="py-1 font-bold" >{product.Brand}</h1>
                            <h3  className="py-1">{product.title}</h3>
                            <p >MENS-TOP</p>
                            <div className="  flex justify-items-start  text-xs  -space-x-16 lg:space-x-5   lg:text-xs  ">   {/* flex div */}
                                <div className="flex justify-start">{/* price div */}
                                    <p  className="py-1" >{product.price}</p>
                                </div>{/* price div */}
        
                                <div className="flex justify-start py-1">{/* old price div */}
                                    <p className="line-through text-gray-500">{product.old_price}</p>
                                </div>{/* old price div */}
        
                                <div>{/* Discount price div */}
                                    <p className="text-red-700 py-1">{product.discount_price}</p>
                                </div>{/* Discount price div */}
        
                            </div>   {/* flex div */}
                            <p>SELECT SIZE</p>
        
                            <div className="space-x-2 py-1">
                                <button className="border border-gray-500 bg-slate-800 text-yellow-300 h-6 w-6 text-center">S</button>
                                <button className="border border-gray-500 bg-slate-800 text-yellow-300 h-6 w-6">M</button>
                                <button className="border border-gray-500 bg-slate-800 text-yellow-300 h-6 w-6">L</button>
                                <button className="border border-gray-500 bg-slate-800 text-yellow-300 h-6 w-6">XL</button>
                                <button className="border border-gray-500 bg-slate-800 text-yellow-300 h-6 w-7">XXL</button>
                            </div>
                            {/* <div>
                                <sapn>COLOR<b>WHITE</b></sapn>
        
                            </div>
                            <FaRegCircle className="h-[5]" /> */}
        
                            <div className="py-5 space-x-3">
                                <button className="border h-[6vh]  lg:w-[15vw] px-3 bg-red-950 text-yellow-300">ADD TO CART </button>
                                <button className="border h-[6vh]  lg:w-[10vw]  px-3  bg-slate-300">WISHLIST </button>
        
                            </div>
                            <Accordion sx={{width:"250px"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{fontSize:"10px"}}>PRODUCT SPECIFICATION</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="flex justify-around pr-4" >
                                        <div className="">
                                            <p className="text-[9px] text-gray-700">Color</p>
                                            <h2 className="text-[15px] font-semibold">black</h2>
                                        </div>
        
                                        <div>
                                            <p className="text-[9px] text-gray-700">Gender</p>
                                            <h2 className="text-[15px] font-semibold">Men</h2>
                                        </div>
                                    </div>
        
                                    <div className="flex justify-around " >
                                        <div>
                                            <p className="text-[9px] text-gray-700">Fabric</p>
                                            <h2 className="text-[15px] font-semibold">Cotton</h2>
                                        </div>
        
                                        <div>
                                            <p className="text-[9px] text-gray-700" >Fit</p>
                                            <h2 className="text-[15px] font-semibold">Slim Fit</h2>
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    
        </div>
    )
}
export default CheckProduct;