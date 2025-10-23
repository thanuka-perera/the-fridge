import { ChangeEvent } from 'react';

export interface CustomInputProps {
    classname?:string;
    inputEmoji?: string
    inputLabel?: string
    inputName?: string
    inputPlaceholder?: string
    inputType?: string
    inputValue?: string ;
    onChange?:(e: ChangeEvent<HTMLInputElement>) => void; 
}