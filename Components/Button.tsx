import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"button">{
    variant?: "primary" | "secondary" | "danger" | "ghost";
}

export default function Button({ variant = "primary", disabled,...props }: Props){
    const variants = {
        primary: "bg-primary text-surface",
        secondary: "bg-surface text-primary border border-primary",
        ghost: "bg-transparent text-surface",
        danger: "bg-error text-suface",
    };

    return(
        <button  
        {...props}
        className={twMerge(
            "py-sm px-lg rounded-md text-body font-body disabled:bg-primary-soft disabled:text-text-faint disabled:cursor-not-allowed",
            variant === "primary" && "bg-primary text-surface",
            variant === "secondary" && "bg-surface text-primary border border-primary",
            variant === "ghost" && "bg-transparent text-primary",
            variant === "danger" && "bg-error text-surface",


        )}
        ></button>
    )
}