import React from "react";

function ContactPage() {

    return (
        <div>
            <div className="px-12 md:w-[550px] md:px-20 mt-4">
                <h3 className="font-semibold">Contact Us</h3>
                <div className="flex gap-2 ">
                    <div>
                        <p className="text-[12px] font-bold ">Address:</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[11px] ">Being Human Clothing Four Aces Fashion House Pvt. Ltd.,13th Floor, ABR Emerald, Plot No. D-8, Street no. 16, MIDC, Andheri East, Mumbai 400 093</p>

                    </div>
                </div>
                <br>
                </br>

                <div className="flex gap-2 pl-4 items-center">
                    <div>
                        <p className="text-[12px] font-bold ">Email:</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[10px]">
                            support@beinghumanclothing.com
                        </p>
                    </div>

                </div>
                <span className="text-[10px] pl-4 text-gray-500 ">We’re available on email,<br></br>
                    Monday – Friday 11AM -5PM IST.</span>


            </div>



        </div>
    )
}

export default ContactPage;