import { useEffect, useState } from "react";
import Card from "./Card";
import Simer from "./Simer";
import { data } from "react-router-dom";
const Body = ()=>{
    const [dataList,setdataList] = useState([]);
    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata = async ()=>{
         const data = await fetch("https://fakestoreapi.com/products");
         const json = await data.json();
         setdataList(json);
         console.log(json);
         
    }
    if(dataList.length <= 0){
        return <Simer />
    }
   
    return (
        <div className="flex justify-center gap-10  space-y-5 flex-wrap  mx-5 mt-20">
            {
                dataList.map((List)=>{
                    return <Card data={List} key={List.id}/>
                })
            }
            
        </div>
    )
}
export default Body;