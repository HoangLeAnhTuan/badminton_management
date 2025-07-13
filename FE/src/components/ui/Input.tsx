import { InputHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, helperText, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </label>
                )}
                <input
                    className={clsx(
                        "w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none transition-colors",
                        {
                            "border-gray-300 focus:border-primary-500 focus:ring-primary-500":
                                !error,
                            "border-red-300 focus:border-red-500 focus:ring-red-500":
                                error,
                        },
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                {helperText && !error && (
                    <p className="mt-1 text-sm text-gray-500">{helperText}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };
