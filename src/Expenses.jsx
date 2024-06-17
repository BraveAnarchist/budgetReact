import { useContext } from "react"
import { context } from "./App"

export default function Expenses(){
    const {obj,setObj}=useContext(context);
    function remover(idx){
        console.log(idx)
        let arr=[...obj];
        arr=arr.splice(idx,1);
        setObj(arr);
    }
    return(<>
        <h2 className="ml-[3vw] text-2xl my-[1vw]">Expenses</h2>
        <div>
            {
                obj.map((ele,idx)=>{
                    
                    return(<div className="flex mx-[3vw] justify-between p-[2vh] border bg-[#f8f9fa] mb-[2vh]" key={idx}>
                        <p>{ele.name}</p>
                        <p>{ele.price} <i className="fa-solid fa-circle-xmark" onClick={()=>{remover(idx)}}></i></p>
                        
                    </div>)
                })
            }
        </div>
    </>)
}