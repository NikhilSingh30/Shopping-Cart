import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardPageCard from "./CartPageCard";
const CartPage = ()=>{
    const itemList = useSelector((store)=>store.cart.items);
    const price = useSelector((store)=>store.cart.totalPrice)
    return (
        <>
        {
            (itemList.length > 0) ? (<div className="flex mt-10  mx-auto w-[70%] pb-15 shadow-2xl px-15 flex-col gap-3">
            <p className="text-2xl font-semibold">Your Cart</p>
            {
                itemList.map((item)=>{
                    return <CardPageCard data={item} key={item.id}/>
                })


            }

            <p className="text-xl font-semibold flex justify-end ">Total : ${price.toFixed(2)}</p>
            <Link to="/">
           <button className="w-[100%] h-11 bg-orange-400 rounded-md text-white text-lg hover:bg-orange-500 mt-5 cursor-pointer "  
           
           >Back To Shopping</button>
           </Link>
           
        </div>) :(<div className="flex mt-10  mx-auto w-[70%] pb-12 shadow-2xl px-15 flex-col gap-3">
            <p className="text-2xl font-semibold">Your Cart is empty</p>
            

            
            <Link to="/">
           <button className="w-[100%] h-12 sm:h-11 bg-orange-400 rounded-md text-white sm:text-lg  hover:bg-orange-500 mt-5 cursor-pointer "  
           
           >Back To Shopping</button>
           </Link>
           
        </div>)
        }  
        </>
    )
}
export default CartPage;