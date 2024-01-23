import React from "react";

function MaskCatageory(){

    const Mask = [
        {
            Id: 1,
            img: "https://scontent.xx.fbcdn.net/v/t1.6435-9/120188198_3649175311780279_946257247488615716_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9b3078&_nc_ohc=6CEXorFfkwQAX9SBqy_&_nc_ht=scontent.xx&oh=00_AfCd2gag7CRPA1lENQxwt0qmdbLq0S3ja5U15n_rkbalWg&oe=658B1628",
            title: "BH-YELLOW MASK",
            price: "RS.499",
            old_price: "RS.999",
            discount_price: "(50%)",

        },
        {
            Id: 2,
            img: "https://scontent.xx.fbcdn.net/v/t1.6435-9/118736288_3575765375787940_9169052009817487470_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=QhjSBpgVDocAX8bUhgB&_nc_ht=scontent.xx&oh=00_AfB581iRPK7jfJ7WDit2EXJszJSm7_fFLM6MTLGlNX94Ng&oe=658B22D6",
            title: "BH-4-Mask",
            price: "RS.999",
            old_price: "RS.1,999",
            discount_price: "(50%)",

        },
        {
            Id: 3,
            img: "https://scontent.xx.fbcdn.net/v/t1.6435-9/118230308_3540455319318946_2356857585968434364_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=uO5hJ_TjWYcAX_6Gw0Q&_nc_ht=scontent.xx&oh=00_AfB1FHNHpDaSObG3VjOvnWegnliyvzR-5iF1mAWI9eooEQ&oe=658AF1F9",
            title: "BH-Black-Mask",
            price: "RS.499",
            old_price: "RS.999",
            discount_price: "(50%)",

        },
        {
            Id: 4,
            img: "https://scontent.xx.fbcdn.net/v/t1.6435-9/118247762_3537329786298166_6553664670761847645_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=AI0dImjrzG0AX97ixJc&_nc_ht=scontent.xx&oh=00_AfAnKFL_XNDcutPD1223AhGnsh_6X4HJxNRClzwU7iQ5zg&oe=658B0DBC",
            title: "BH-5-Mask Combi",
            price: "RS.1,999",
            old_price:"" ,
            discount_price: "",

        },
        {
            Id: 5,
            img: "https://www.indiaoff.com/wp-content/uploads/2023/03/being-human-mask-design-bhmkaw-12-1.jpg",
            title: "BH-3-Mask",
            price: "RS.999",
            old_price: "",
            discount_price: "",

        },
        {
            Id: 5,
            img: " https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/121009731_3689115944452882_9081659247485654911_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9b3078&_nc_ohc=82mkzg4JznwAX97ID1G&_nc_ht=scontent.fpnq16-1.fna&oh=00_AfA2TeBmwWFrlpM2zozG--1oFRRfCmf44rtHqEPvbAuOGg&oe=658ED691",
            title: "BH-Blue-Mask",
            price: "RS.499",
            old_price: "",
            discount_price: "",

        },
       
    ]
    return(
        <div>
    
        <h1 className="text-center text-2xl">BH-MASK</h1>
        <div className="grid grid-cols-2 px-1  md:grid-cols-5 gap-1 ">
            {
                Mask.map((event) => {
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

export default MaskCatageory