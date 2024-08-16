import { BottomWarnings } from "../Components/ButtomWarnings"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputBox } from "../Components/InputBox"
import { SubHeading } from "../Components/SubHeading"

export const Signin = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-black">
                <Heading label={"Sign In"}></Heading>
                <SubHeading label={"Enter your information to login"}></SubHeading>
                <InputBox label={"E-Mail"} placeholder={"ryan01@gmail.com"}></InputBox>
                <InputBox label={"Password"}></InputBox>
                <div className="pt-4">
                <Button label={"Sign In"}></Button>
                </div>
                <div>
                <BottomWarnings label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}></BottomWarnings>
                </div>
            </div>
            
          

        </div>

    </div>
}