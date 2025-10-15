import { ButtonProps } from '@/util'
import { FC } from 'react'
import  CN  from 'classnames'

export const Button:FC<ButtonProps>=({
    buttonText,
    classname,
    onClick
}:ButtonProps)=> {

    return (

        <div>
            <button 
                onClick={onClick} 
                className={CN('bg-[#005B8F] rounded-md px-6 py-2 hover:bg-[#00476F] transition', classname)}
            >
                {buttonText}
                
            </button>
        </div>
    )
}
