import {Loader} from 'lucide-react'

export default function Loading(){
    return(
    <div  className="flex flex-col space-y-4 text-gray-500 items-center justify-center p-12">
        <Loader className="animate-spin"/>
        <span>Loading Fridge Items</span>
    </div>
    )
}