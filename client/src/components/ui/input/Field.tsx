import React, { FC, forwardRef } from "react";
import { IField } from "./field.interface";
import cn from "clsx";

const Field = forwardRef<HTMLInputElement, IField>(
  (
    { placeholder, error, className, type = "text", style, Icon, ...rest },
    ref
  ) => {
    return (
      <div className={cn("mb-4", className)} style={style}>
        <label>
          <span className="mb-1 block">
            {Icon && <Icon className="mr-3" />}
            {placeholder}
          </span>
          <input
            ref={ref}
            placeholder={placeholder}
            className={cn(
              "px-4 py-2 placeholder:text-gray rounded-lg w-full outline-none border border-gray border-solid focus:border-primary transition-all",
              { "border-red": !!error }
            )}
            type={type}
            {...rest}
          />
        </label>
        {error && <div className="text-red mt-1 text-sm">{error}</div>}
      </div>
    );
  }
);

Field.displayName = 'Field'

export default Field;
