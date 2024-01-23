import React, { useState } from "react";
//MENU BAR PHONE TOGGLE
import Hamburger from 'hamburger-react'
//IMPORT IMAGE BHLOGO
import bhlogo_home from "../Home/Assets/bh-logo_home.jpg"
//IMPORT MENU ICON
import MenuIcon from '@mui/icons-material/Menu';
//MENU ICON HEART
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//MENU USER ICON
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
//MENU ADD TO CART
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//BEING COUSIONS LOGO IMPORT
import bh_cousion from "../navigationBar/Assets/BH-cousions.jpg"
//SERACH ICON IMPORT
import SearchIcon from '@mui/icons-material/Search';
//2712image import image
// import 100%LOVECARESHARE NAVBAR PHONE IMAGE
import { Link } from "react-router-dom";

function NavBarPage() {
    // navbar open and close functionlity
    const [open, setopen] = useState(false);
    //for handburger toggle button
    const [isOpen, setOpen] = useState(false)

    const onOpen = () => {
        setopen(!open)
    }

    return (

        <div className="sticky left-0 top-0 z-50  bg-white shadow-lg ">
            {/* // main contanier */}
            <div className="flex justify-between   md:hidden bg-white">  {/* flex div */}
                <div className="mt-5">   {/*menu icon */}
                    <button onClick={onOpen}> <Hamburger toggled={isOpen} toggle={setOpen} /></button>
                    <ul className={open ? 'fixed w-[100%] h-screen left-0 top-[10.2%] bg-black text-white duration-500 ease-in-out' : 'fixed left-[100%] top-[10.5%] h-screen duration-300 ease-in-out'}>
                        <li className="mt-8 border-b py-2 pl-2 "><Link to="/mens" >MEN</Link></li>
                        <li className="border-b py-2 pl-2"><Link to="/women">WOMEN</Link></li>
                        <li className="border-b  py-2 pl-2"><Link to="/cat">ACCESSORIES</Link></li>
                        <li className="border-b  py-2 pl-2"><Link to="/login">LOGIN</Link> </li>
                        <div className=" w-full">
                            <img src="https://scontent.fpnq16-1.fna.fbcdn.net/v/t31.18172-8/11696425_998278570203313_2696810134291665412_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=908e45&_nc_ohc=6waDg4P0LEgAX-HqPE-&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfDdFaGwsW11P2uJsJ6TtWH491Msw6m03vOIBdvGb_1F3w&oe=6589DA47" alt="img" className=" md:px-20 w-full px-6 py-4 h-[55vh] bg-cover  " />
                            <img src="https://i.pinimg.com/564x/c8/00/bc/c800bc78252742601304f0ebf81c3f45.jpg" />
                        </div>
                        <li className="text-center"><p>Copyright © 2022 Being Human Clothing</p></li>
                    </ul>
                </div>   {/* menu icon  */}

                <Link to="/" className="ml-10 cursor-pointer" >
                    <img src={bhlogo_home} height={75} width={75} className="mb-3" />
                </Link>

                <div className="flex justify-between  mt-5 m:hidden"> {/* 3 icon flex div */}
                    <div>
                        <FavoriteBorderIcon fontSize="large" />      {/* HEART ICON */}
                    </div>

                    <Link to="/login">
                        <PersonOutlineIcon fontSize="large" />   {/* USER ICON */}
                    </Link>
                    <div>
                        <AddShoppingCartIcon fontSize="large" />
                    </div>
                </div> {/* 3icon  flex div */}
            </div>  {/* flex div */}

            {/* -------------------------------------------PHONE NAVBAR END---------------------------------------------------------- */}

            {/* --------------------------------------------DEKSTOP NAVBAR START--------------------------------------------------------------- */}
            <div className="items-center h-[12]"   >  {/* MAIN CONTAINER DEKSTOP */}
                <div className="hidden md:block text-sm    "> {/* 3 navbar  */}
                    <ul className=" flex justify-end items-center gap-1 pr-3 bg-black text-white text-[10px]" >
                        <li><Link to="/">Help |</Link> </li>
                        <li><Link to="/">Track Order |</Link> </li>
                        <li><Link to="/login">LogIn</Link></li>
                    </ul>
                </div >
                <div className="hidden md:block">
                    <div className="flex justify-between">
                        <ul>
                            <li className="pl-3 pt-1  pb-1">
                                <Link to="/" className="">
                                    <img src={bhlogo_home} height={40} width={40} />
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex justify-between space-x-8 mt-2  text-lg  ">
                            <li className="text-[12px] "><b><Link to="/mens">MEN</Link></b></li>
                            <li className="text-[12px]"><b><Link to="/women">WOMEN</Link></b></li>
                            <li className="text-[12px]"><b><Link to="/cat">ACCESSORIES</Link></b></li>
                        </ul>
                        {/* ========================================================== */}
                        <ul>
                            <li className="mt-2 text-center">
                                <img src={bh_cousion} className="h-[5vh] md:hidden" />
                            </li>
                        </ul>
                        {/* ========================================================== */}
                        <ul className="flex justify-between space-x-3 mt-2 pr-5">  {/* dekstop icon 3 navbar */}
                            <li><SearchIcon fontSize="small" /></li>
                            <li><FavoriteBorderIcon fontSize="small" /></li>
                            <li><AddShoppingCartIcon fontSize="small" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBarPage;