import { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "./Button"
import {useNavigate} from 'react-router-dom'

export const Users = () =>{
    const [users , setUsers] = useState([])
    const [filter , setFilter] = useState("")

    useEffect(()=> {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response =>{
                setUsers(response.data.user)
            })
    },  [filter])

    return <div className="ml-4 mr-4">
        <div className="font-bold text-lg mt-6">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder={"Search Users...."} className="w-full px-2 py-2 border rounded border-slate-300"></input>
        </div>
        <div>
           {users.map(user => <User user={user}/>)} 
        </div>
    </div>

    
}

function User({user}){
    const navigate = useNavigate();
    return <div className="flex justify-between mt-8">
        <div className="flex ">

            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center">
                <div className="flex flex-col justify-center h-full text-xl font-bold">
                {user.firstname[0]}
                </div>
            </div>
            <div className="ml-4 flex flex-col justify-center text-xl font-bold h-full" >
                {user.firstname} {user.lastname}
            </div>

        </div>
        <div className="flex flex-col justify-center">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" +user.firstname)
            }} label={"Send Money"}></Button>
        </div>
    </div>

}