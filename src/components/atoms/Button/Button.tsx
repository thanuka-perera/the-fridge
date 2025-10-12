import { ButtonProps } from '@/util'
import { FC } from 'react'

export const Button:FC<ButtonProps>=({
    buttonText,
    className,
    onClick
}:ButtonProps)=> {

    return (

        <div>
            <button 
                onClick={onClick} 
                className={`${className} bg-[#005B8F] rounded-md px-6 py-2 hover:bg-[#00476F] transition`}
            >
                {buttonText}
                
            </button>
        </div>
    )
}
