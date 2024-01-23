import React from "react";

function WoMenJacket(){

    const womenJacket = [
        {
            Id: 1,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t39.30808-6/322690147_1949749341897994_3091988540969502100_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r8j07rlZpYcAX9f3Jq1&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfAiCiF8GCWOIBQKYweZ-XunTZ_jGK2lMYKVml8hDfC9VA&oe=65673105",
            title: "Women Pink Sweat Jacket",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",

        },
        {
            Id: 2,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t39.30808-6/314354826_5912099258803267_6619238140436369517_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p16CKAQ6sUwAX9qt3BS&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfBGNWLahghAtro_GhCZslCpri7jtbzIbvNgfAphax2hqw&oe=656930C4",
            title: "Gray Hoddy Jacket ",
            price: "RS.2,999",
            old_price: "RS.5,999",
            discount_price: "(50%)",

        },
        {
            Id: 3,
            img: "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/v/1/s/xs-1-no-bhwji23531-black-being-human-original-imagtbz8wf6nmsxv.jpeg?q=70",
            title: "Women Black Jacket",
            price: "RS.1,999",
            old_price: "RS.3,999",
            discount_price: "(50%)",

        },
        {
            Id: 4,
            img: "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/z/y/h/xs-1-no-bhwji23506-steel-blue-being-human-original-imagtbz9g7en4mb9.jpeg?q=70",
            title: "Blue Jacket Women",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",

        },
        {
            Id: 5,
            img: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018983580_437Wx649H_202308301702191.jpeg",
            title: "Women Pink Hoddy Jacket",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",

        },
        {
            Id: 6,
            img: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018984436_437Wx649H_202308301734011.jpeg",
            title: "Yellow Denim Jacket Women",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",


        },
        {
            Id: 7,
            img: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018984481_437Wx649H_202308301737211.jpeg",
            title: "Black Denim Jacket Women",
            price: "RS.7,999",
            old_price: "RS.15,999",
            discount_price: "(50%)",

        },
        {
            Id: 8,
            img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000015934918_437Wx649H_202301011745131.jpeg",
            title: "Black Women Hoddy Jacket",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 9,
            img: "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/e/8/f/s-1-no-bhwji23531-maroon-being-human-original-imagtbz85mzegwmw.jpeg?q=70",
            title: "Red Women Jacket",
            price: "RS.1,999",
            old_price: "RS.3,999",
            discount_price: "(50%)",

        },
        {
            Id: 10,
            img: "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/f/s/g/xl-1-no-bhwji22501-golden-peach-being-human-original-imagpgnaybcefyas.jpeg?q=70",
            title: " Women Pink Jacket",
            price: "RS.2,999",
            old_price: "RS.5,999",
            discount_price: "(50%)",

        },
    ]
    return(
        <div>
    
        <h1 className="text-center text-2xl">WOMEN JACKET</h1>
        <div className="grid grid-cols-2 px-1  lg:grid-cols-5 gap-1 ">
            {
                womenJacket.map((event) => {
                    return (
                        <div className="h-[320px]   md:h-[65vh]  lg:h-[65vh] lg:gap-y-3 overflow-hidden " >
                        <img src={event.img} className=" h-[220px] w-[280px] px-1 rounded-2xl md:rounded-lg md:h-[45vh] lg:px-2 lg:h-[55vh] md:w-[50vw] md:px-4 md:py-2 transition-all md:hover:scale-105 ease-in lg:rounded-2xl " />
                            <p className="text-sm  text-center  font-semibold lg:text-xs px-2  ">{event.title} </p>
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

export default WoMenJacket;