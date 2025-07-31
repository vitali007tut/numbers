import React from 'react';

type CustomInputProps = {
    value?: string;
    onClick?: () => void;
    placeholder?: string;
};

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
    ({ value, onClick, placeholder }, ref) => (
        <input
            type="text"
            value={value}
            onClick={onClick}
            placeholder={placeholder}
            readOnly
            ref={ref}
            className="w-full bg-transparent placeholder:text-slate-400 text border border-slate-300 rounded-md px-4 py-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-slate-400"
        />
    )
);
export default CustomInput;