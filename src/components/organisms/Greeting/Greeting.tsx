'use client'
import {FC} from 'react'

export const Greeting:FC=() =>{

    return (
        <div className="flex flex-col text-center items-center justify-center space-y-3 w-lg">
            <h1 className="text-4xl font-bold   text-[#003A59]">Good Morning, Johny!</h1>
            <div className=" text-lg flex items-center gap-2"><span>🌤 </span> <p className="text-gray-500">It&apos;s better to go shopping before this friday</p></div>
        </div>
    )
}