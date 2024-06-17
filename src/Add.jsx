import { useContext, useState } from "react"
import { context } from "./App";

export default function Add(){
    const [name,setName]=useState("");
    const [price,setPrice]=useState();
    const {obj,setObj}=useContext(context)

    return(<>
    <h2 className="ml-[3vw] text-2xl">Add Expenses</h2>
    <div className="flex justify-between pt-[2vh] mx-[3vw]">
        <div className="grow"><p>Name</p><input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="border w-[90%]"/></div>
        <div className="grow"><p>Cost</p><input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} className="border w-[90%]" /></div>
    </div>
    <button className="ml-[3vw] text-xl mt-3 text-white bg-[#0d6efd] hover:bg-[#4677c1] p-2 rounded-md" onClick={(e)=>{
        if(!name.length==0 && price!=undefined){
        setObj([...obj,{name:name,price:Number(price)}])
        setName("");
        setPrice("");
        }
    }}>Save</button>
    </>)
}