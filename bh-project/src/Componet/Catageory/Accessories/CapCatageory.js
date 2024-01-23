import React from "react";

function CapCatageory(){
    const CapCat = [
        {
            Id: 1,
            img: "https://scontent.fbom66-1.fna.fbcdn.net/v/t39.30808-6/399339447_735076771993381_5370488883022758346_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jHfTOknQ5m4AX8G0pOI&_nc_ht=scontent.fbom66-1.fna&oh=00_AfBy2-9xKulkt0EjmhVxZI6z9XeaqtgabrVmgb4Ja4vBww&oe=6569A462",
            title: "BH-Black Cap",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 2,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t39.30808-6/288863435_5506418436038020_6089957379245549203_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FMFXAewJko8AX9mid5-&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfARDW2BRcUi40drx_FOSo0VxhVC2OfxW1FykLFXQ-xJ-A&oe=65689E15",
            title: "BH-Green Cap ",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 3,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t39.30808-6/282203175_5422653737747824_5116919352723388013_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uwjqiFWlqUcAX8aa3b7&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfCdXwQtnazkD35QSo9-812GB0NRwsmeMpCmHzstWS9K3A&oe=6567BA41",
            title: "BH-Sky Blue Cap",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 4,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t39.30808-6/281353108_5422653674414497_9094504547941293478_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1fY51dUoTUAAX8AQ_iv&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfBngdvgP6Xb-WW-12DufgOhwMuZr_lmaXUS831NfS5OdA&oe=656752B1",
            title: "BH-Black Cap Yellow Logo",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 5,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/104324345_3298313770181842_2413654007322805766_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_ohc=Ele4xhRCxkEAX_pSo64&_nc_oc=AQmOgf5j6a-4_1qTfU7jJGKo9Pl96TuTVitoaR3Z-aGIV06kuVRkL5a4ks_Feq40RuM&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfB-AnqPtszKh6AA56j3gQOORtTShCXQ4UmFgm7_hyHBeA&oe=658AAD59",
            title: "BH-Denim Cap",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 6,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/102936389_3298313266848559_5227869123744282555_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=4dc865&_nc_ohc=2NzED6Y6dQYAX86gHgx&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfBPUt-9rLH3NHttzxF1Wqohij_g1NnPtLrBjWtwV3wc_w&oe=658AD99D",
            title: "BH-Red Black Cap",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",


        },
        {
            Id: 7,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/103651789_3298313053515247_5359081708116405383_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=4dc865&_nc_ohc=FBKAacy5HToAX-DHFpq&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfAU6YdwIuJuk38ZS1-ZHzd9JqJ-8nAvINO4p3BB_YTgpQ&oe=658ACB0E",
            title: "BH-Dark Denim Cap",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 8,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/82524461_2933581823321707_8036018488105500672_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=RiCFr_g_Av0AX_9YYfV&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfBMRqY8bnsvOKJ5xtcpQrk1wf9aGDWLxNaBBiB2bp9M4w&oe=658AC6DC",
            title: "BH-Sky Denim Cap",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 9,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t31.18172-8/22291265_1706525186027383_7185903785271897461_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=MEIRVO8BP-cAX_szuRW&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfBv-Zbfwyx6rv_UxIVeWPHGYwUsw20sayhm94N9pgCk0Q&oe=658ADBB8",
            title: "BH-Dark Blue Red Logo Cap",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 10,
            img: "https://scontent.fpnq16-1.fna.fbcdn.net/v/t31.18172-8/22382271_1706525082694060_466584495337973389_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=F6C4UE_IhQgAX90yJCz&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfCdkk4nDRYAIeHnz1H3JV99L1K_8dOhYeIcK7wM1NM0Fg&oe=658AB51B",
            title: "BH-Yellow Cap",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
    ]

    return(
        <div>
         <br></br>
         
           
            
        <h1 className="text-center text-2xl">WOMEN T-SHIRT</h1>
        <div className="grid grid-cols-2 px-1  md:grid-cols-5 gap-1 ">
            {
                CapCat.map((event) => {
                    return (
                        <div className="h-[265px]  md:h-[65vh]  lg:h-[65vh] md:gap-y-3 overflow-hidden " >
                        <img src={event.img} className=" h-[200px] w-[300px]  rounded-2xl md:rounded-lg md:h-[45vh]  lg:h-[50vh] md:w-[50vw] lg:w-[55vw] md:px-2 lg:px-1 md:py-2 transition-all md:hover:scale-105 ease-in lg:rounded-2xl " />
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
            <img src="https://scontent.fpnq16-1.fna.fbcdn.net/v/t39.30808-6/289358295_5517988754880988_1462145963636441425_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=y_voUipqo8MAX_-Ewhj&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfCZnw9YrQGI1P1SVRm8MLcert47B5lZUl6vhHrHeZbiFw&oe=6568A3C2" className="md:hidden"></img>

        </div>
    )
}

export default CapCatageory;