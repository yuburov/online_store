import cn from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "orange" | "white" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant,
  size = "md",
  ...rest
}) => {
  return (
    <button
      className={cn(
        "rounded-xl font-medium shadow py-2 hover:shadow-lg transition duration-300 ease-out",
        {
          "text-white bg-primary": variant === "orange",
          "text-primary bg-white": variant === "white",
          "text-white bg-secondary": variant === "secondary",
          "px-5 py-2 text-sm": size === "sm",
          "px-8 py-2 text-sm": size === "md",
          "px-12 py-2 text-base": size === "lg"
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
