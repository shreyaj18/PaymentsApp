import { useState } from "react"
import { Heading } from "../Components/Heading"
import { InputBox } from "../Components/InputBox"
import { useSearchParams } from "react-router-dom"
import axios from "axios"

export const SendMoney = () =>{
    const [searchParams] = useSearchParams("")
    const id= searchParams.get("id");
    const name = searchParams.get("name")
    const [amount, setAmount] = useState(0)

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-black">
                <Heading label={"Send Money"}></Heading>
                <div className="flex mt-8">
                    <div className="rounded-full h-12 w-12 bg-green-400 flex justify-center">
                        <div className="flex flex-col justify-center h-full text-xl font-bold">
                        {name[0].toUpperCase()}
                        </div>
                    </div>
                    <div className="ml-4 mt-2 flex flex-col justify-center text-2xl font-bold h-full" >
                    {name}
                    </div>
                </div>
                <div className="mt-4">
                <InputBox onChange={(e)=>{
                    setAmount(e.target.value)
                }} label={"Amount (in Rs)"} placeholder={"Enter Amount"}></InputBox>
                </div>
                <div className="mt-4">
                    <button onClick={()=>{
                        axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to: id,
                            amount
                        },{
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                    }} type="button" className="w-full text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-4 
                    focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Initiate Transaction</button>
                    
                </div>
            </div>
        </div>
    </div>
}