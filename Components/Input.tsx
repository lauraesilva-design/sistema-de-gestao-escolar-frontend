import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { LucideIcon } from "lucide-react";

interface Props extends ComponentProps<"input"> {
  label?: string;
  caption?: string;
  error?: string;
  required?: boolean;
  icon?: LucideIcon;
  variant?:
    | "default"
    | "rounded"
    | "textArea"
    | "select"
    | "radioButton"
    | "selectButton";
}

export default function Input({
  id,
  label,
  caption,
  error,
  required = false,
  variant = "default",
  icon: Icon,
  ...props
}: Props) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="text-text text-label font-label flex gap-xs"
      >
        {label} {required && <p className="text-error">*</p>}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-sm top-1/2 -translate-y-1/2 text-text-muted" />
        )}
        <input
          id={id}
          {...props}
          className={twMerge(
            "w-full p-sm bg-surface border border-border-strong rounded-sm text-data text-text font-data placeholder:text-text-muted focus:border-primary focus:outline-none focus:shadow-[0px_0px_4px_2px_rgb(0_0_0/50%)]",
            variant === "rounded" && "rounded-full",
            error && "border-error",
            Icon && "pl-2xl",
          )}
        />
      </div>

      <p
        className={twMerge(
          "text-text text-caption font-caption",
          error && "text-error",
        )}
      >
        {error || caption}
      </p>
    </div>
  );
}