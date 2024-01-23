import React from "react";

function WomenJeans(){
    const womenJeans = [
        {
            Id: 1,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/116434673_3419951304684754_8905789040625896938_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=gAdY0qzh9OMAX987m3D&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfAn48jOSQNXFsk8VSbFTZxXdLsj_F4as9pnzgYLET6vMA&oe=6589C5B9",
            title: "Women Dark Blue Jeans",
            price: "RS.1,999",
            old_price: "RS.3,999",
            discount_price: "(50%)",

        },
        {
            Id: 2,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/34016189_1936314093066418_7532404920922669056_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=gdSLPKmkMDYAX-WeGUz&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfDNOdnwyIQ3XyBD36EMoBhJCU-TZi5EYSY_uj-aDqmwZA&oe=6589C38C",
            title: "Women Sky Blue Jenas",
            price: "RS.1,299",
            old_price: "RS.2,599",
            discount_price: "(50%)",

        },
        {
            Id: 3,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/36785167_1993455320667700_4435734110392025088_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=3SsiMKODQWsAX8VOM8Z&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfD6NJ9g4TqVfwMAaHxhyk_cCtfaCXLeWB6sjY_bXMyqDA&oe=6589A54F",
            title: "Blue Denim Women Jeans",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 4,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/34131410_1942266209119945_237179492928323584_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=frNNZFMMZH8AX-PvefV&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfA2SK_nkFfs9e7WeFUcnI-iuk9b8NLyz-v9y1MqBju5hA&oe=6589C445",
            title: "Women White Denim Jeans",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",

        },
        {
            Id: 5,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/83554421_2996840037013813_3108852609092419584_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=810d5f&_nc_ohc=Vmxc8RZfQJ0AX94EmIU&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfDwKzxi7vQts8UCwfMtjjzHXgK9LdCCtZ__HscN7QyZQw&oe=6589B352",
            title: "Black Denim Women Jeans",
            price: "RS.4,999",
            old_price: "RS.9,999",
            discount_price: "(50%)",

        },
        {
            Id: 6,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/82430725_2966191190078698_8836182749460037632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=810d5f&_nc_ohc=f88VWvubkrMAX9dzeTX&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfCr2X2nXoEBQ3tTBJ7MntiMjVK4yBExQpI7BfSbx_-vfw&oe=6589CEFD",
            title: "Women Gray Denim Jeans",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",


        },
        {
            Id: 7,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/81819484_2940545475976603_8910984720225927168_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=810d5f&_nc_ohc=Sj1_FaXCZZIAX-AGNR_&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfA082uYeaOA8XD9YmRrwaYrnv8CyNBQL5KtuBtFw0nLqQ&oe=6589B88E",
            title: "Dark Blue Women Jeans",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 8,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/80341214_2915025038528647_6629133737630105600_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=810d5f&_nc_ohc=plNP8YPnNGUAX90gadF&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfBK3KW-pTRUTCpxlZeDTX6HA6XW0U15y74TDLZEWoR_7w&oe=6589AFA2",
            title: "Light Blue Women Jeans",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 9,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/79388125_2868675079830310_1415256788491567104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=810d5f&_nc_ohc=I9s0_tRqmQgAX_suCBO&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfAO4AeCH0WEY1WHD9hRV3cBIODSGrFJR0Wze8bNL7tt4g&oe=6589A52E",
            title: "Light Gray Women Jeans",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 10,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/73342375_2783357695028716_6212964330204299264_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=lusXyujZXRQAX_cVU_f&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfAHW063aRcaRHy6Ddjz3FtsMNmMfNdR6FMGUSsSC7qQIw&oe=6589CB50",
            title: "Women Blue Denim Jeans",
            price: "RS.1,499",
            old_price: "RS.2,999",
            discount_price: "(50%)",

        },
    ]
    return(
        <div>
    
        <h1 className="text-center text-2xl">WOMEN JEANS</h1>
        <div className="grid grid-cols-2 px-1  md:grid-cols-5 gap-1 ">
            {
                womenJeans.map((event) => {
                    return (
                        <div className="h-[300px]  md:h-[65vh]  lg:h-[65vh] md:gap-y-3 overflow-hidden " >
                        <img src={event.img} className=" h-[240px] w-[280px] px-3 rounded-2xl md:rounded-lg md:h-[45vh]  lg:h-[55vh] md:w-[50vw] md:px-1 md:py-2 transition-all md:hover:scale-105 ease-in lg:rounded-2xl " />
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

export default WomenJeans