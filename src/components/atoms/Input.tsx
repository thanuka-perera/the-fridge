import {InputProps} from '@/util/interfaces/fridge'

export default function Input({label,emoji,name,type="text",placeholder,value,onChange ,className}:InputProps){
    return(
        <div className="flex flex-col space-y-1 w-full">
            <label className="text-[#003A59] font-semibold flex items-center gap-1">
                <span className="text-lg">{emoji}</span>
                {label}
            </label>
            <input placeholder={placeholder} type={type} name ={name} value={value} onChange={onChange} className={`border border-gray-300 rounded-[4px] p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#003A59] ${className}`}/>
        </div>
    )
}