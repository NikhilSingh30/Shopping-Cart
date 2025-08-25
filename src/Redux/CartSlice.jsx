import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
        tempItems : [],
        totalPrice : 0,
    },
    reducers : {
        addToCart : (state,action)=>{

            const itemPresent = state.items.find((item)=>{
                return (item.id===action.payload.id)
            }  
            );
            if(itemPresent){
                itemPresent.quantity +=1;
            }
            else{
                 state.items.push({...action.payload , quantity : 1});
                  state.tempItems = ([...state.items]);
            }
             state.totalPrice = state.items.reduce((sum,item)=>{
                       return sum = sum + item.price * (item.quantity)
             },0);
        },
        removeFromCart : (state,action)=>{
                state.items = state.items.filter((item)=>item.id != action.payload)
                state.tempItems = ([...state.items])
                state.totalPrice = state.items.reduce((sum,item)=>{
                       return sum = sum + item.price * (item.quantity)
             },0);
        },
        updateCart : (state,action)=>{
            const itemPre = state.items.find((item)=>item.id===action.payload.id)
            if(itemPre){
                itemPre.quantity = action.payload.value;
                state.totalPrice = state.items.reduce((sum,item)=>{
                       return sum = sum + item.price * (item.quantity)
             },0);
            }
           

        }
    }

})
export const{addToCart,removeFromCart,updateCart} = CartSlice.actions;

export default  CartSlice.reducer;