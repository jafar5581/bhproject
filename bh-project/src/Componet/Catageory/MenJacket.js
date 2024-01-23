import React from "react";
//import 10 pic men jacket
import menJacket1 from './Assets/MenJacket/MenJacket1.jpg'
import menJacket2 from './Assets/MenJacket/MenJacket2.jpg'
import menJacket3 from './Assets/MenJacket/MenJacket3.jpg'
import menJacket4 from './Assets/MenJacket/MenJacket4.jpg'
import menJacket5 from './Assets/MenJacket/MenJacket5.jpg'
import menJacket6 from './Assets/MenJacket/MenJacket6.jpg'
import menJacket7 from './Assets/MenJacket/MenJacket7.jpg'
import menJacket8 from './Assets/MenJacket/MenJacket8.jpg'
import menJacket9 from './Assets/MenJacket/MenJacket9.jpg'
import menJacket10 from './Assets/MenJacket/MenJacket10.jpg'

function MentJacket(){
    const menJacket = [
        {
            Id: 1,
            img: `${menJacket1}`,
            title: "Men Printed Black  Jacket",
            price: "RS.2,999",
            old_price: "RS.5,999",
            discount_price: "(50%)",

        },
        {
            Id: 2,
            img: `${menJacket2}`,
            title: "Men Black Sport Jacket",
            price: "RS.2,500",
            old_price: "RS.5,000",
            discount_price: "(50%)",

        },
        {
            Id: 3,
            img: `${menJacket3}`,
            title: "Men Metallic Denim Jacket",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",

        },
        {
            Id: 4,
            img: `${menJacket4}`,
            title: "Men Printed Black Jacket",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",

        },
        {
            Id: 5,
            img: `${menJacket5}`,
            title: "Dark Blue Denim Jacket",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",

        },
        {
            Id: 6,
            img: `${menJacket6}`,
            title: "Red Denim Jacket Men",
            price: "RS.5,999",
            old_price: "RS.11,999",
            discount_price: "(50%)",


        },
        {
            Id: 7,
            img: `${menJacket7}`,
            title: "Black Denim Jacket Logo",
            price: "RS.2,999",
            old_price: "RS.5,999",
            discount_price: "(50%)",

        },
        {
            Id: 8,
            img: `${menJacket8}`,
            title: "Denim Jacket MEN",
            price: "RS.3,749",
            old_price: "RS.7,499",
            discount_price: "(50%)",

        },
        {
            Id: 9,
            img: `${menJacket9}`,
            title: "Black Denim Jacket Men",
            price: "RS.7,999",
            old_price: "RS.15,999",
            discount_price: "(50%)",

        },
        {
            Id: 10,
            img: `${menJacket10}`,
            title: "Black Cotton Jacket",
            price: "RS.2,999",
            old_price: "RS.5,999",
            discount_price: "(50%)",

        },
    ]


    return(
        <div>
    
        <h1 className="text-center text-2xl">MEN-JACKET</h1>
        <div className="grid grid-cols-2 px-1  md:grid-cols-5 gap-1 ">
            {
                menJacket.map((event) => {
                    return (
                        <div className="h-[280px]  md:h-[53vh] md:gap-y-3 overflow-hidden " >
                        <img src={event.img} className=" h-[220px] w-[320px] rounded-md md:rounded-md md:h-[45vh] md:px-2 md:py-2 transition-all hover:scale-105 ease-in" />
                            <p className="text-sm  text-center  font-semibold lg:text-xs">{event.title} </p>
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
        <img src="https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/124864055_3801476323216843_5913386312404252806_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9b3078&_nc_ohc=uhN_aAb7sAcAX_YoRkB&_nc_ht=scontent.fbom66-1.fna&oh=00_AfB8ikhAr-1MJC9CgZnEtqiLu_IlkOKqNSFpc3LpYDR0Wg&oe=658C1D28" className="md:hidden"/>
    </div>
    )
}

export default  MentJacket