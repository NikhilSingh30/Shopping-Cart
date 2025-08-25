import { addToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
const Card = (props)=>{
    const dispatch = useDispatch();
    const handleAddToCart = (data)=>{
        dispatch(addToCart(data));

    }
    return (
        <div className="flex flex-col w-70  rounded-md shadow-xl items-center pb-4 gap-1  transition-transform duration-300 ease-in-out hover:scale-105  px-5">
           <img src={props.data.image} alt="" className="h-40 w-35"/>
           <p className="font-semibold text-lg">{(props.data.title.length > 20)? `${props.data.title.slice(0,19)}...` :  `${props.data.title}`}</p>
           <p className="font-semibold text-lg">Price : ${props.data.price}</p>
           <button className="py-2 px-4 bg-orange-400 rounded-md text-gray-200 cursor-pointer mt-[3px]" onClick={()=>handleAddToCart(props.data)}>Add To cart</button>
        </div>
    )
}
export default Card;
