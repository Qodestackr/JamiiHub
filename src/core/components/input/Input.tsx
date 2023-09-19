import * as React from "react";
import { cn } from "@core/utils/styles/classnames";
import { getAbsoluteFilePath } from "@/core/utils/files";

type AllowedInputTypes =
  | "text"
  | "password"
  | "email"
  | "number"
  | "date"
  | "time"
  | "url"
  | "tel"
  | "search"
  | "color";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  type: AllowedInputTypes
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, errorMessage, ...props }, ref) => {
    const containerClasses = cn("relative", "mb-4", className);

    const inputClasses = cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      errorMessage ? "border-red-500" : "border-gray-300"
    );

    const errorClasses = cn("text-red-500", "text-sm", "mt-1");

    return (
      <div className={containerClasses}>
        {label && <label htmlFor={props.id}>{label}</label>}
        <input
          type={type}
          className={inputClasses}
          ref={ref}
          {...props}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage && `${props.id}-error`}
        />
        {errorMessage && (
          <div
            id={`${props.id}-error`}
            role="alert"
            aria-live="polite"
            className={errorClasses}
          >
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);

const InputDisplayName = "Input";
Input.displayName = InputDisplayName;
console.log(getAbsoluteFilePath(InputDisplayName));
export { Input };
