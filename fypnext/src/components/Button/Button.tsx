import clsx from "clsx";
import * as React from "react";

import { Spinner } from "src/components/Spinner";

const variants = {
  primary: "bg-gray-900 text-white hover:bg-gray-50:text-blue-600",
  secondary:
    "bg-white text-gray-700 hover:bg-gray-400 border-gray-600 active:bg-gray-600 hover:border-gray-500",
  inverse: "bg-white text-brand1 hover:bg-brand1 hover:text-white",
  danger: "bg-red-600 text-white hover:bg-red-50:text-red-600",
  brand1:
    "bg-[#9B26B6] text-white hover:bg-[#B735D4] border-b-[#8500A4] active:bg-[#8500A4] hover:border-b-[#9B26B6]",
  green:
    "bg-[#00C7B1] text-white hover:bg-[#33d2c1] border-b-[#00A08E] active:bg-[#00A08E] hover:border-b-[#00B8A2] disabled:hover:bg-[#00CCB4]",
  ghost: "bg-transparent border-none text-sky-500",
  "danger-ghost": "bg-transparent border-none text-red-600",
  white: "text-sky-500 font-extrabold border-gray-400 bg-white border-2",
  "white-nav":
    "text-[#1E1268] font-extrabold border-[#e5e5e5] bg-white hover:bg-[#e5e5e5] border-2",
  answer:
    "border-2 border-b-4 border-gray-300 border-opacity-40 bg-dark-overlay bg-opacity-80 hover:bg-white hover:bg-opacity-20",
  "answer-selected":
    "border-2 border-b-4 border-sky-300 bg-white bg-opacity-20",
  "answer-disabled":
    "bg-gray-400 text-gray-400 bg-opacity-80 text-opacity-0 border-b-0",
  "answer-correct":
    "bg-green-800 text-white bg-opacity-60 border-4 border-green-800",
  "answer-wrong": "bg-red-800 text-white bg-opacity-60 border-4 border-red-800",
};

const sizes = {
  none: "px-0 py-0",
  xs: "py-2 px-4",
  sm: "py-4 px-4",
  md: "lg:py-4 py-2 px-4 xl:px-12 xl:text-lg",
  lg: "py-3 px-8 lg:text-xl",
};

const justifyAlignments = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  justify?: keyof typeof justifyAlignments;
  isLoading?: boolean;
  uppercase?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      startIcon,
      endIcon,
      uppercase = true,
      justify = "center",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          "flex items-center disabled:opacity-70 active:translate-y-0.5 active:border-b-transparent transition duration-200 ease-in-out rounded-xl disabled:cursor-not-allowed font-medium focus:outline-none border-b-4",
          variants[variant],
          sizes[size],
          justifyAlignments[justify],
          className,
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span
          className={clsx(
            "mt-1 font-bold w-full",
            uppercase ? "uppercase" : "",
          )}
        >
          {props.children}
        </span>{" "}
        {!isLoading && endIcon}
      </button>
    );
  },
);

Button.displayName = "Button";
