import { useContext } from "react"
import { context } from "./App"

export default function Heading(){
    const {obj}=useContext(context)
    let total=obj.reduce((prev,acc)=>{return prev+acc.price},0)
    console.log(total)
    return(
        <>
        <h1 className="text-4xl">My Budget Planner</h1>
        <div className="flex justify-between text-2xl px-[8vw] pt-[10vh]">
            <div className="border p-[2vh] text-[#6c757d]">Budget: Rs.2000</div>
            <div className="border p-[2vh] text-[#1c8860]">Remaining: Rs.{2000-total}</div>
            <div className="border p-[2vh] text-[#087990] bg-[#cff4fc]">Budget: Rs.{total*1}</div>
        </div>
        </>
    )
}