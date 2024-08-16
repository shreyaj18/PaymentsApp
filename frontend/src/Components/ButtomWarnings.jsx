import { Link } from "react-router-dom";

export function BottomWarnings({label,buttonText,to}){
    return <div className="flex justify-center text-sm">
        <div>
            {label}
        </div>
        <Link className="pointer underline cursore pointer pl-1" to={to}>{buttonText}</Link>
    </div>
}