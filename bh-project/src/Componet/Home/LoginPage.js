import React from "react";
//ADD BACKGROUND IMAGE login page 2 phnee
import bgImg from "../Home/Assets/bh-back.jpg"
//ADD BACKGROUND LOGO phone
import BHWHITE_LOGO from './Assets/bh_white_logo.png'
//addbackground image phone
import backgrndimg from "../Home/Assets/background_login_phone.jpg"

//dekstop bg image left side
import bg_dog from "../Home/Assets/beingdog.jpg"

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="body">
            {/* PHONE LOGIN */}
            <div className=" h-[82vh] flex justify-center  py-10 pt- pb-40 md:hidden" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}>
                <div className="h-[65vh] py-4" style={{ backgroundImage: `url(${backgrndimg})`, backgroundSize: "cover" }}>
                    <div className="space-y-4 h-[55vh] w-[320px] mt-12">
                        <div className="img  pl-0">
                            <img src={BHWHITE_LOGO} height={200} width={150} />
                        </div>
                        <h1 className="text-center pt-2-* text-white text-xl font-bold ">LOG IN</h1>
                        <div >
                            <div className="inputbox text-center">
                                <input type="text" placeholder="ENTER USERNAME" className="rounded-md w-[60vw] h-8 text-center"  {...register("username", { required: true })} />
                                {errors.username && <span className="text-red-600 text-[10px]">This field is required</span>}
                            </div>
                            <div className="inputboxpass text-center ">
                                <input type="password" placeholder="ENTER PASSWORD" className="rounded-md w-[60vw] h-8 text-center"  {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-600 text-[10px]">This field is required</span>}
                            </div>
                            <div className="button bg-yellow-200 text-black w-28 rounded-lg flex justify-center ml-28 ">
                                <Link to="/" type="button" className="p-2 items-center justify-center " onClick={handleSubmit(onSubmit)}>LOGIN</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PHONE LOGIN */}
            </div>

            {/* ---------------------------------------------------------------------------------- */}

            {/* DEKSTOP LOGIN */}
            <div className="hidden md:block   " >
                <div className="flex justify-center mt-5 ">    {/* DEKSTOP div flex*/}
                    <div className="h-[400px] w-[450px] shadow-xl" style={{ backgroundImage: `url(${bg_dog})`, backgroundSize: "cover" }}>
                        <h1 className="text-6xl text-right text-white font-semibold" >LOGIN</h1>
                    </div>
                    <div className="h-[400px] w-[450px] shadow-xl bg-yellow-300 ">
                        <h1 className="text-6xl  font-semibold">PAGE</h1>
                        <div className="inputbox text-center pt-14">
                            <input type="text" placeholder="ENTER USERNAME" className="rounded-md text-[12px] h-8 outline-none px-2 text-center w-52" {...register("username", { required: true })}/><br/>
                            {errors.username && <span className="text-red-600 text-[10px]">This field is required</span>}
                        </div>
                        <br></br>
                        <div className="inputboxpass text-center dekstop  ">
                            <input type="password" placeholder="ENTER PASSWORD" className="rounded-md text-[12px] h-8 px-2 outline-none w-52 text-center" {...register("password", { required: true })}/><br/>
                            {errors.password && <span className="text-red-600 text-[10px]">This field is required</span>}
                        </div>
                        <br></br>
                        <div className="flex justify-center text-sm">
                            <ul>
                                <li>Forgot Password !</li>
                            </ul>
                        </div>
                        <br></br>
                        <div className="flex justify-center">
                            <br></br>
                            <div className="button bg-yellow-200 text-black  rounded-lg text-center">
                                <Link to='/' type="button" className="p-2 w-[20vw]" onClick={handleSubmit(onSubmit)}>LOGIN</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* DEKSTOP LOGIN */}
            </div>
        </div>
    )
}
export default LoginPage
