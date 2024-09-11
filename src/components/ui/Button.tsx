import { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: Iprops) => {
  return (
    <button
      className={`${className} ${width} w-full h-14 text-white p-2 rounded-md font-bold`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
