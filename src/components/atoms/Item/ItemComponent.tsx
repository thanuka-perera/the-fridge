import { Trash } from 'lucide-react';
import { ItemProps, getFoodStatus } from '@/util'
import { useFridge } from '@/context';
import { FC } from 'react'


export const ItemComponent:FC<ItemProps>=({
    itemDetails,
    onClick,
    onDelete
}: ItemProps)=> {

    const status = getFoodStatus(itemDetails.expiry)
    const { loading } = useFridge();

    return (
        <div 
            className="flex items-center justify-between gap-4 p-4 border border-[#EEF3F8] rounded cursor-pointer hover:bg-gray-50" 
            onClick={onClick}
        >

            <div className="flex gap-3">
                <p className="font-semibold col-span-2 min-w-[110px]">{itemDetails.title}</p>
                <p className="text-sm text-gray-500 col-span-5">Expiry date - {itemDetails.expiry}</p> 
            </div>

            <div className="col-span-3 col-start-10 flex gap-3 items-center justify-center">

                <span className={` px-3 py-1 w-[110px] text-xs font-medium text-center rounded-full ${status.labelClasses}`}>
                    {status.label}
                </span>

                <div className="flex w-[50px] justify-center items-center  hover:text-red-500" 
                    onClick={(e) => {
                        e.stopPropagation();
                        if (!loading && onDelete) onDelete();    
                    }}
                >
                    <Trash className="text-[#2E3849] cursor-pointer hover:text-red-500" size="16" onClick={onDelete} />
                    
                </div>

            </div>
        </div>
    )
}