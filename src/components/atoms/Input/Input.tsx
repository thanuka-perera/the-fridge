import { CustomInputProps } from "@/util";
import { FC } from "react";
import CN from "classnames";

export const CustomInput: FC<CustomInputProps> = ({
  classname,
  inputEmoji,
  inputLabel,
  inputName,
  inputPlaceholder,
  inputType = "text",
  inputValue,
  onChange,
}: CustomInputProps) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label className="text-[#003A59] font-semibold flex items-center gap-1">
        <span className="text-lg">{inputEmoji}</span>

        {inputLabel}
      </label>

      <input
        className={CN(
          "border border-gray-300 rounded-[4px] p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#003A59]",
          classname
        )}
        name={inputName}
        onChange={onChange}
        placeholder={inputPlaceholder}
        type={inputType}
        value={inputValue}
      />
    </div>
  );
};
