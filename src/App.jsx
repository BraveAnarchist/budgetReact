import { createContext, useContext, useState } from "react"
import Header from "./Heading.jsx"
import Expenses from "./Expenses.jsx"
import Add from "./Add.jsx"

import "./App.css"
export const context=createContext();

export default function App(){
  const [obj,setObj]=useState([]);
  return(
  <context.Provider value={ {obj, setObj}}>
  <>
    <Header></Header>
    <Expenses></Expenses>
    <Add></Add>
  </>
  </context.Provider>)
}