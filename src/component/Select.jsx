import React,{ useId } from "react";

const Select = ({
    option,
    label,
    className,
    ...props
}, ref) => {
    const id = useId();

    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`${className}`}
            >
                {option?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}

            </select>
        </div>

    )
}
export default React.forwardRef(Select);