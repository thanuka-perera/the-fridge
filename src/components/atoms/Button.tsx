import { ButtonProps } from "@/util/interfaces/fridge"

export default function Button({text,className,onClick}:ButtonProps) {
    return (
        <div className="">
            <button onClick={onClick} className={`${className} bg-[#005B8F]  font-semibold rounded-md px-6 py-2 hover:bg-[#00476F] transition `}>
                {text}
            </button>
        </div>
    )
}