import { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button = ({ children, className, width = "w-full", ...rest }: Iprops) => {
  return (
    <button
      className={`${className} ${width} h-14 text-white p-2 rounded-md`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
