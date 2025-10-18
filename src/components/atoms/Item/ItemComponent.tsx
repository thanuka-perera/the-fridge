'use client';

import { Trash } from 'lucide-react';
import { ItemProps, getFoodStatus } from '@/util'
import { FC, useState, useEffect } from 'react'

interface Status {
    label: string,
    labelClasses: string,
    iconColor: string
}


export const ItemComponent: FC<ItemProps> = ({
    itemDetails,
    onClick,
    onDelete
}: ItemProps) => {

    const [status, setStatus] = useState<Status>({
        label: 'Loading...',
        labelClasses: 'bg-gray-100 text-gray-400',
        iconColor: 'text-gray-400'
    });

    useEffect(() => {
        const CurrentStatus = getFoodStatus(itemDetails.expiry)
        setStatus(CurrentStatus)
    }, [itemDetails.expiry])

    console.log("Rendering Date: ",itemDetails.expiry);

    return (
        <div
            className='group flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border border-[#EEF3F8] 
            rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-all duration-200 hover:shadow-sm w-full'
            onClick={onClick}
        >

            <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0 flex-1'>
                <div className="min-w-0 flex-1 sm:flex-none sm:w-[140px] lg:w-[160px]">
                    <p className="font-medium text-gray-900 truncate text-sm sm:text-sm">
                        {itemDetails.title}
                    </p>
                </div>
                <div className="items-center md:flex hidden gap-2">
                    <span className="text-xs text-gray-500 flex ">Expiry date - </span>
                    <div className='text-xs text-gray-500 hidden sm:flex'>
                        {itemDetails.expiry
                            ? itemDetails.expiry.toLocaleDateString('en-CA')
                            : 'Unknown'}

                    </div>
                </div>
            </div>

            <div className='flex items-center gap-3 sm:gap-4 flex-shrink-0'>

                <div className="">
                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 
                        ${status.labelClasses}`}
                        style={{ minWidth: '110px', maxWidth: '130px' }}>
                        {status.label || ''}
                    </span>
                </div>

                <div className='flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 group-hover:bg-red-50 hover:bg-red-100 flex-shrink-0'
                    onClick={(e) => {
                        e.stopPropagation();
                        if (onDelete) onDelete();
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.stopPropagation();
                            onDelete?.();
                        }
                    }}
                    aria-label={`Delete ${itemDetails.title}`}
                >
                    <Trash className='text-[#2E3849] cursor-pointer hover:text-red-500' size='16' onClick={onDelete} />

                </div>

            </div>
        </div>
    )
}