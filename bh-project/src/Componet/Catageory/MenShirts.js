import React from "react";
//10 pic MEN SHIRTS
import menShirt1 from './Assets/MenShirts/MenShirt1.jpg'
import menShirt2 from './Assets/MenShirts/MenShirt2.jpg'
import menShirt3 from './Assets/MenShirts/MenShirt3.jpg'
import menShirt4 from './Assets/MenShirts/MenShirt4.jpg'
import menShirt5 from './Assets/MenShirts/MenShirt5.jpg'
import menShirt6 from './Assets/MenShirts/MenShirt6.jpg'
import menShirt7 from './Assets/MenShirts/MenShirt7.jpg'
import menShirt8 from './Assets/MenShirts/MenShirt8.jpg'
import menShirt9 from './Assets/MenShirts/MenShirt9.jpg'
import menShirt10 from './Assets/MenShirts/MenShirt10.jpg'
import { Link } from "react-router-dom";



function MenShirts() {
    const menShirt = [
        {
            Id: 1,
            img: `${menShirt1}`,
            title: "Red Chex Shirt",
            price: "RS.1,249",
            old_price: "RS.2,499",
            discount_price: "(50%)",

        },
        {
            Id: 2,
            img: `${menShirt2}`,
            title: "Men Denim Shirt",
            price: "RS.1,999",
            old_price: "RS.3,999",
            discount_price: "(50%)",

        },
        {
            Id: 3,
            img: `${menShirt3}`,
            title: "Men Pure Casual Shirt",
            price: "RS.1,999",
            old_price: "RS.3,999",
            discount_price: "(50%)",

        },
        {
            Id: 4,
            img: `${menShirt4}`,
            title: "Men Sky Denim Shirt",
            price: "RS.2,499",
            old_price: "RS.4,999",
            discount_price: "(50%)",

        },
        {
            Id: 5,
            img: `${menShirt5}`,
            title: "Men Dark Blue Printed Shirt",
            price: "RS.1,999",
            old_price: "RS.3,999",
            discount_price: "(50%)",

        },
        {
            Id: 6,
            img: `${menShirt6}`,
            title: "Men Gray Denim Shirt",
            price: "RS.2,099",
            old_price: "RS.4,199",
            discount_price: "(50%)",


        },
        {
            Id: 7,
            img: `${menShirt7}`,
            title: "Men Blue Line shirt",
            price: "RS.1,999",
            old_price: "RS.3,999",
            discount_price: "(50%)",

        },
        {
            Id: 8,
            img: `${menShirt8}`,
            title: "Dark Gray Denim Shirt",
            price: "RS.2,999",
            old_price: "RS.5,999",
            discount_price: "(50%)",

        },
        {
            Id: 9,
            img: `${menShirt9}`,
            title: "Men White Print Shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 10,
            img: `${menShirt10}`,
            title: "Men Sky Blue Casual Shirt",
            price: "RS.1,299",
            old_price: "RS.2,599",
            discount_price: "(50%)",

        },
    ]


    return (
        <div>
    
        <h1 className="text-center text-2xl">MEN-SHIRT</h1>
        <div className="grid grid-cols-2 px-1  md:grid-cols-5 gap-1 ">
            {
                menShirt.map((event) => {
                    return (
                        <Link to="/productdetails" state={event} className="h-[280px]  md:h-[53vh] md:gap-y-3 overflow-hidden " >
                        <img src={event.img} className=" h-[220px] w-[320px] rounded-xl md:rounded-md md:h-[45vh] md:px-2 md:py-2 transition-all md:hover:scale-105 ease-in" />
                            <p className="text-sm  text-center  font-semibold lg:text-xs">{event.title} </p>
                            <div className=" px-4 grid grid-cols-3  text-xs  gap-2  lg:px-6 lg:text-xs  ">   {/* flex div */}
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
       <img src="https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/121673949_3712341908796952_3515052600303470741_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=2CLKgifUQUcAX9IkijI&_nc_ht=scontent.fbom66-1.fna&oh=00_AfCSrs6iDRgffWzYJrPrX0d7Y_4oA42jtVr9l_mOq3C-tQ&oe=659649C0" className="md:hidden"/>
    </div>
    )
}

export default MenShirts;