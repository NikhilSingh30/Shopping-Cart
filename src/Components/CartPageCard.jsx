import { removeFromCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateCart } from "../Redux/CartSlice";
import { useState } from "react";
import toast from "react-hot-toast";
const CardPageCard = (props)=>{
    const dispatch = useDispatch();
    const items = useSelector((store)=>store.cart.items)
    const [Value,setValue] = useState(props.data.quantity);
    const  handleupdate = (id,value)=>{
            if(value < 1){
                alert("Quantity must be atleast 1");
                setValue(props.data.quantity)   
            }
            else{
                dispatch(updateCart({id,value}))
                 toast.success(`${props.data.title.slice(0,19)}... quantity updated to ${value} 🛒`, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
                

            }
    }
    const tempItems = useSelector((store)=>store.cart.tempItems)
     const removehandle = (id)=>{
        dispatch(removeFromCart(id));
    toast.success(`${props.data.title.slice(0,19)}... removed from  cart 🛒`, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  }); 
    }
    return (
        <div className="flex sm:flex-row flex-col gap-2 sm:gap-8 border-b-1 border-gray-200 pb-4">
            <div className="h-30 w-30  gap-10">
                <img src={props.data.image} alt="" className="h-full"/>
            </div>
            <div className="mt-2">
                <p className="font-semibold text-xl ">{props.data.title}</p>
                <p className="text-lg mt-3">Price: ${props.data.price}</p>
                <div className="mt-1 flex sm:flex-row flex-col gap-4 sm:gap-2 sm:items-center">
                    <input type="number"  min="1"  className="h-7 w-18 border pl-2"  value={Value} onChange={(e)=>setValue(e.target.value)} />
                    <button className="bg-orange-400 text-gray-200 px-4 py-1 rounded-md cursor-pointer hover:bg-orange-500" onClick={(e)=>handleupdate(props.data.id,Value)}>Update</button>
                    <button className="bg-orange-400 text-gray-200 px-4 py-1 rounded-md cursor-pointer hover:bg-orange-500" onClick={()=>removehandle(props.data.id)}>Remove</button>
                </div>

            </div>
        </div>
    )
}
export default CardPageCard;