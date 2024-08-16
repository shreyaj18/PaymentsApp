export const Balance = ({value}) =>{
    return <div className="flex mt-5 ml-4">
        <div className="font-bold text-lg">
            Your balance:
        </div>
        <div className="font-semibold text-lg ml-4">
            RS {value}
        </div>
    </div>
}