import React from "react";

function WomenTshirt(){
    const womenTshirt = [
        {
            Id: 1,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/119009321_3538171222862761_2299028360834254766_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=nx3_tLk8xPQAX_xxJVQ&_nc_ht=scontent.fbom66-1.fna&oh=00_AfBxgkRHj6AQFaZI5SgKCKXHQub0TBvZNWVG8z7HUf-7eA&oe=6587C563",
            title: "White Casual T-Shirt",
            price: "RS.1,499",
            old_price: "RS.2,999",
            discount_price: "(50%)",

        },
        {
            Id: 2,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/119008405_3538171066196110_6627282952070239790_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=_YiYnK-lSIgAX_QxdQm&_nc_ht=scontent.fbom66-1.fna&oh=00_AfCwpB18mEI3b_jzOfBy_oEOvjOBb-5k3qnQnFwxdcz3qw&oe=6587D14F",
            title: "Gray Casual T-Shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 3,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/118992246_3538169562862927_6238337854503434470_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=35uOBnJEHXQAX_VLI_P&_nc_ht=scontent.fbom66-1.fna&oh=00_AfBZGB6CYzwPWDUap4hRjpS9mrYP780M_QO6VvhgFMOabw&oe=6587B055",
            title: "White Logo T-Shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 4,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/118804628_3538169356196281_19462620567286082_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=DOpbLgYevE4AX8ueUGc&_nc_ht=scontent.fbom66-1.fna&oh=00_AfCS7PnhpOwZHMORCBJevboMtku56xeawLNgXC9z0MvCxA&oe=6587AE61",
            title: "White Printed T-Shirt",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",

        },
        {
            Id: 5,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/118930311_3538169049529645_4787756967085778925_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=G2oqby-CJbIAX8otS2E&_nc_ht=scontent.fbom66-1.fna&oh=00_AfCzAlSMvk7LfRtj9uVagXT1WDDZFufeHrQHRd6if73uHA&oe=6587C043",
            title: "White Casual T-Shirt",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",

        },
        {
            Id: 6,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/119001354_3538168632863020_375179273283388393_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=ieZ02QIKsnYAX9PAjJy&_nc_ht=scontent.fbom66-1.fna&oh=00_AfCVcqawr-WPOtIhGHQgQwWYtPLg-iXLieLIXuWbzhlkvg&oe=6587BD64",
            title: "White Logo Print T-Shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",


        },
        {
            Id: 7,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/116697593_3419949468018271_5253330041781403135_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=0P_TQ-RHj58AX_VAFLL&_nc_ht=scontent.fbom66-1.fna&oh=00_AfBxKzav-xmG-DL5mWSv6ncKruXEp6tbrQdkP79PhfLRPw&oe=6587C798",
            title: "Green Printed T-Shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 8,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/115928350_3419940751352476_527219948740914502_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=JHM4KejGp28AX-Au6u_&_nc_ht=scontent.fbom66-1.fna&oh=00_AfD1H-Ctu7Rg8tFSQOIPQ4xriWXWxn-GkWfwaWmoVUgxWw&oe=6587A683",
            title: "Pink Heart T-Shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 9,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/73130721_2773729169324902_5647734642502008832_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=K0OA6V1TPnwAX_K6pQ7&_nc_ht=scontent.fbom66-1.fna&oh=00_AfCuY69JW63qHkSrwYO1qCYOPSrmbQ4eIsjl_YvUSrbUWg&oe=6587A88B",
            title: "Purple Logo T-Shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 10,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/73325253_2783357668362052_3905651445742960640_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=4F5jgvRI0QoAX_VBrVI&_nc_ht=scontent.fbom66-1.fna&oh=00_AfBmv8OeOsZK52eOh9ypMQmfGee1uW1e5frXp52RBUJkbw&oe=6587D3F6",
            title: "Gray White T-Shirt",
            price: "RS.1,499",
            old_price: "RS.2,999",
            discount_price: "(50%)",

        },
    ]

    return(
        <div>
    
        <h1 className="text-center text-2xl">WOMEN T-SHIRT</h1>
        <div className="grid grid-cols-2 px-1  lg:grid-cols-5 gap-1  md:grid-cols-2 ">
            {
                womenTshirt.map((event) => {
                    return (
                        <div className="h-[300px]  md:h-[50vh]  lg:h-[65vh] md:gap-y-3 overflow-hidden " >
                        <img src={event.img} className=" h-[240px] w-[280px] px-3 rounded-2xl md:rounded-lg md:h-[45vh]  lg:h-[55vh] md:w-[50vw] md:px-4 md:py-2 transition-all md:hover:scale-105 ease-in lg:rounded-2xl " />
                            <p className="text-sm  text-center  font-semibold lg:text-xs px-2 pt-1">{event.title} </p>
                            <div className="grid grid-cols-3 px-4 text-xs  gap-2  lg:px-6 lg:text-xs  ">   {/* flex div */}
                                <div>{/* price div */}
                                <p >{event.price}</p>
                                </div>{/* price div */}

                                <div>{/* old price div */}
                                <p className="line-through text-gray-500">{event.old_price}</p>
                                </div>{/* old price div */}

                                <div>{/* Discount price div */}
                                <p className="text-red-700">{event.discount_price}</p>
                                </div>{/* Discount price div */}

                            </div>   {/* flex div */}
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default WomenTshirt