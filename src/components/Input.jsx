import { forwardRef } from "react";

const Input = forwardRef(function Input({isTextarea, label, ...props}, ref)
{
    const inputclasses = "w-full p-1 border-b-2 rounded-sm bg-stone-200 text-stone-600 border-stone-300 focus:outline-none focus:border-stone-600";
    return (
    <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {isTextarea? <textarea className={inputclasses} {...props} ref={ref}></textarea> :
        <input className={inputclasses} {...props} ref={ref}></input>}
    </p>);
});

export default Input;