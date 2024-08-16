import { useState } from "react"
import { BottomWarnings } from "../Components/ButtomWarnings"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputBox } from "../Components/InputBox"
import { SubHeading } from "../Components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstname , setFirstName] = useState("")
    const [lastname , setLastName] = useState("")
    const [username , setUserName] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-black">
                <Heading label={"Sign Up"}></Heading>
                <SubHeading label={"Enter your information to create an account"}></SubHeading>

                <InputBox onChange={e => {
                    setFirstName(e.target.value);
                }} label={"First Name"} placeholder={"Ryan"}></InputBox>

                <InputBox  onChange={e => {
                    setLastName(e.target.value);
                }} label={"Last Name"} placeholder={"Carter"}></InputBox>

                <InputBox onChange={e => {
                    setUserName(e.target.value);
                }} label={"E-Mail"} placeholder={"ryan01@gmail.com"}></InputBox>

                <InputBox onChange={e => {
                    setPassword(e.target.value);
                }}label={"Password"}></InputBox>

                <div className="pt-4">
                <Button onClick={async () =>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup" ,{
                        username,
                        firstname,
                        lastname,
                        password
                    });
                    localStorage.setItem("token", response.data.token)
                    navigate("/dashboard")
                    
                }} label={"Sign Up"}></Button>
                </div>
                <div>
                <BottomWarnings label={"Already have an account?"} buttonText={"Login"} to={"/signin"}></BottomWarnings>
                </div>
            </div>
            
          

        </div>

    </div>
}