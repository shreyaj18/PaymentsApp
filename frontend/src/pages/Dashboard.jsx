import { AppBar } from "../Components/AppBar"
import { Balance } from "../Components/Balance"
import { Users } from "../Components/Users"

export const Dashboard = () =>{
    return <div> 
        <div>
        <AppBar/>
        </div>
        <div>
            <Balance value={"10,000"}/>
        </div>
        <div>
            <Users/>
        </div>
    </div> 
    
}