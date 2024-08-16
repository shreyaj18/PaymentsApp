export function InputBox({label,placeholder,onChange}){
    return <div>
                <div className="text-left text-md font-medium py-2">
                    {label}
                </div>
                
                    <input onChange={onChange} className="h-10 px-2 py-1 font-lg border-2 border-gray-400 rounded-lg w-full" type="text" placeholder={placeholder}></input>
                
            </div>
        
    }