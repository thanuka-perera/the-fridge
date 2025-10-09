import { ButtonProps } from "@/util/interfaces/fridge"
import {FC} from 'react'

export const Button:FC<ButtonProps>=({text,className,onClick}:ButtonProps)=> {
    return (
        <div className="">
            <button onClick={onClick} className={`${className} bg-[#005B8F]  rounded-md px-6 py-2 hover:bg-[#00476F] transition `}>
                {text}
            </button>
        </div>
    )
}
