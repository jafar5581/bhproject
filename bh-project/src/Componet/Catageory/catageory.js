import React from "react";
import { Link } from "react-router-dom";


function Category() {
    


    return (
        <div>
            <h3 className="text-center bg-black text-yellow-500">category</h3>
            <div className="grid text-2xl md:grid-cols-3 gap-2 p-5 bg-neutral-300">

                <Link to="/mens">
                    <img src="https://i.postimg.cc/fWSvTqVK/men.jpg" className="md:h-96 w-full" />
                    <h1 className="text-center bg-slate-700 text-white">MEN</h1>
                </Link>
                <Link to="/women">
                    <img src="https://i.postimg.cc/y8XCt2kd/62479ce93477d35fc8263ca093eea721.jpg" className="md:h-96 w-full" />
                    <h1 className="text-center bg-slate-700 text-white">WOMEN</h1>
                </Link>
                <Link to="/cat">
                    <img src="https://i.postimg.cc/YqFHfv7Q/54278600-2347366628627827-5825831882406756352-n.jpg" className="md:h-96 w-full" />
                    <h1 className="text-center bg-slate-700 text-white">Accessories</h1>
                </Link>
            </div>
        </div>
    )
}

export default Category