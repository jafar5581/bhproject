import React from "react";
// 


//MEN CATGROEY CART IMAGES
import menTshirt1 from './Assets/MenTshirts/menTshirt1.png'
import menTshirt2 from './Assets/MenTshirts/menTshirt2.png'
import menTshirt3 from './Assets/MenTshirts/menTshirt3.png'
import menTshirt4 from './Assets/MenTshirts/menTshirt4.png'
import menTshirt5 from './Assets/MenTshirts/menTshirt5.png'
import menTshirt6 from './Assets/MenTshirts/menTshirt6.png'
import menTshirt7 from './Assets/MenTshirts/menTshirt7.png'
import menTshirt8 from './Assets/MenTshirts/menTshirt8.png'
import menTshirt9 from './Assets/MenTshirts/menTshirt9.png'
import menTshirt10 from './Assets/MenTshirts/menTshirt10.png'
import { Link } from "react-router-dom";
// 



function MenTshirt() {
    const menTshirt = [
        {
            Id: 1,
            img: `${menTshirt1}`,
            title: "V-Neck Pure Cotton T-shirt",
            price: "RS.499",
            old_price: "RS.1,599",
            discount_price: "(70%)",
            Brand:"BEING HUMAN"

        },
        {
            Id: 2,
            img: `${menTshirt2}`,
            title: "Round neck Fit Printed T-shirt",
            price: "RS.489",
            old_price: "RS.1,399",
            discount_price: "(65%)",
            Brand:"BEING HUMAN"

        },
        {
            Id: 3,
            img: `${menTshirt3}`,
            title: "White Rounded T-shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",
            Brand:"BEING HUMAN"
        },
        {
            Id: 4,
            img: `${menTshirt4}`,
            title: "Men Fit Printed T-shirt",
            price: "RS.499",
            old_price: "RS.1,599",
            discount_price: "(70%)",
            Brand:"BEING HUMAN"
        },
        {
            Id: 5,
            img: `${menTshirt5}`,
            title: "Black Round neck T-shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",
            Brand:"BEING HUMAN"
        },
        {
            Id: 6,
            img: `${menTshirt6}`,
            title: "Black Round neck T-shirt",
            price: "RS.489",
            old_price: "RS.1,399",
            discount_price: "(65%)",
            Brand:"BEING HUMAN"

        },
        {
            Id: 7,
            img: `${menTshirt7}`,
            title: "Men Black Printed T-shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",
            Brand:"BEING HUMAN"
        },
        {
            Id: 8,
            img: `${menTshirt8}`,
            title: "White Printed T-Shirt",
            price: "RS.489",
            old_price: "RS.1,399",
            discount_price: "(65%)",
            Brand:"BEING HUMAN"
        },
        {
            Id: 9,
            img: `${menTshirt9}`,
            title: "Men Gray T-Shirt",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",
            Brand:"BEING HUMAN"
        },
        {
            Id: 10,
            img: `${menTshirt10}`,
            title: "Black Round neck T-shirt",
            price: "RS.499",
            old_price: "RS.1,599",
            discount_price: "(70%)",
            Brand:"BEING HUMAN"
        },
    ]


   


    return (
        <div>

            <h1 className="text-center text-2xl">T-SHIRTS</h1>
            <div className="grid grid-cols-2 px-1  md:grid-cols-2  lg:grid-cols-5 gap-1"   >
                {
                    menTshirt.map((event) => {
                        return (
                            <Link to='/productdetails' className="h-[280px]  md:h-[53vh] md:gap-y-3 overflow-hidden " state={event}>
                                <img src={event.img} className=" h-[220px] w-[320px] px-2 rounded-2xl md:rounded-md md:h-[45vh] md:px-2 md:py-2 transition-all md:hover:scale-105 ease-in" />
                                <p className="text-sm  text-center  font-semibold lg:text-xs md:text-[15px]">{event.title} </p>
                                <div className="grid grid-cols-3 px-2 text-xs  gap-2  lg:px-6 lg:text-xs md:px-16  ">   {/* flex div */}
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
            <img src="https://scontent.fbom66-1.fna.fbcdn.net/v/t39.30808-6/296113713_5671526102878513_8569419405768298651_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=b6_jbQzzNu4AX8gcmU_&_nc_ht=scontent.fbom66-1.fna&oh=00_AfDZ7JTYE53hJPv-VI2CfbmM4QRMQ6-qvYaJ_SDyZwEaqw&oe=6568F034" className="md:hidden"/>
        </div>
    )
}
export default MenTshirt;