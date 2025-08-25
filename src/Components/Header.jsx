import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { use } from "react";
const Header = () =>{
    const items = useSelector((store)=>store.cart.items)
     return (
        <div className="flex items-center justify-between w-full h-20 bg-gray-700">
            <p className="text-white text-2xl ml-10 font-semibold ">
                Shopping Cart
            </p>
            <div className="flex gap-8 mr-10 ">
                <p className="text-white text-xl cursor-pointer hover:text-orange-400">Home</p>
                <p className="text-white text-xl cursor-pointer font-semibold  hover:text-orange-400"><Link to="/cart">Cart{items.length > 0 && `(${items.length})`}</Link></p>
            </div>
        </div>
     )
}
export default Header;