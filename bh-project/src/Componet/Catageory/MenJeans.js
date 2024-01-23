import React from "react";
//10 Pic Men Jeans
import MenJeans1 from './Assets/MenJeans/MenJeans1.jpg'
import MenJeans2 from './Assets/MenJeans/MenJeans2.jpg'
import MenJeans3 from './Assets/MenJeans/MenJeans3.jpg'
import MenJeans4 from './Assets/MenJeans/MenJeans4.jpg'
import MenJeans5 from './Assets/MenJeans/MenJeans5.jpg'
import MenJeans6 from './Assets/MenJeans/MenJeans6.jpg'
import MenJeans7 from './Assets/MenJeans/MenJeans7.jpg'
import MenJeans8 from './Assets/MenJeans/MenJeans8.jpg'
import MenJeans9 from './Assets/MenJeans/MenJeans9.jpg'
import MenJeans10 from './Assets/MenJeans/MenJeans10.jpg'
import { Link } from "react-router-dom";

function MenJeans(){
    const menShirt = [
        {
            Id: 1,
            img: `${MenJeans1}`,
            title: "Jeans Sky Blue",
            price: "RS.1,499",
            old_price: "RS.2,999",
            discount_price: "(50%)",

        },
        {
            Id: 2,
            img: `${MenJeans2}`,
            title: "Black Denim Jeans",
            price: "RS.1,999",
            old_price: "RS.3,999",
            discount_price: "(50%)",

        },
        {
            Id: 3,
            img: `${MenJeans3}`,
            title: "Black Jeans",
            price: "RS.2,999",
            old_price: "RS.5,999",
            discount_price: "(50%)",

        },
        {
            Id: 4,
            img: `${MenJeans4}`,
            title: "Dark Blue Jeans",
            price: "RS.2,999",
            old_price: "RS.1,499",
            discount_price: "(50%)",

        },
        {
            Id: 5,
            img: `${MenJeans5}`,
            title: "Men Blue Denim Jeans",
            price: "RS.2,999",
            old_price: "RS.5,999",
            discount_price: "(50%)",

        },
        {
            Id: 6,
            img: `${MenJeans6}`,
            title: "Men Denim Blue Jeans",
            price: "RS.2,099",
            old_price: "RS.4,199",
            discount_price: "(50%)",


        },
        {
            Id: 7,
            img: `${MenJeans7}`,
            title: "Men Denim Gray Jeans ",
            price: "RS.1,999",
            old_price: "RS.3,999",
            discount_price: "(50%)",

        },
        {
            Id: 8,
            img: `${MenJeans8}`,
            title: "Dark Jenas Denim Men",
            price: "RS.2,999",
            old_price: "RS.5,999",
            discount_price: "(50%)",

        },
        {
            Id: 9,
            img: `${MenJeans9}`,
            title: "Men White Print Shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 10,
            img: `${MenJeans10}`,
            title: "Men Sky Blue Casual Shirt",
            price: "RS.1,299",
            old_price: "RS.2,599",
            discount_price: "(50%)",

        },
    ]
    return(
        <div>
           
    
        <h1 className="text-center text-2xl">MEN-JEANS</h1>
        <div className="grid grid-cols-2 px-1  md:grid-cols-5 gap-1 ">
            {
                menShirt.map((event) => {
                    return (
                        <Link to="/productdetails" state={event} className="h-[280px]  md:h-[53vh] md:gap-y-3 overflow-hidden " >
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
                        </Link>
                    )
                })
            }
        </div>
        <img src="https://scontent.xx.fbcdn.net/v/t39.30808-6/277819492_5357852097579250_1320613159356581083_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nAijPPCfeNYAX8lUZde&_nc_ht=scontent.xx&oh=00_AfB8nUWF-HdEBKfV_NqmE5S-djhNMF8Pie-kQ511yVOxow&oe=65681F0B" className="h-[25vh] md:hidden w-full"/>
    </div>
    )
}
export default MenJeans