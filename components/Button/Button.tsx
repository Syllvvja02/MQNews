import Link from "next/link";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?:
    | "primary"
    | "danger"
    | "success"
    | "warning"
    | "outline-danger"
    | "outline-warning"
    | "outline-success"
    | "outline-yellow"
    | "outline-primary";
  square?: boolean;
  paddingLess?: boolean;
  href: string;
}
const Button = ({
  className,
  children,
  variant,
  square,
  paddingLess,
  href = "",
  type = "button",
  ...props
}: IButtonProps) => {
  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-violet-500 hover:bg-violet-700 text-white";
      case "danger":
        return "bg-red-500 hover:bg-red-700 text-white ";
      case "success":
        return "bg-green-500 hover:bg-green-700 text-white ";
      case "warning":
        return "bg-amber-500 hover:bg-amber-700 text-white ";
      case "outline-danger":
        return "bg-black text-red-500 border border-red-500 hover:text-white hover:bg-red-700  ";
      case "outline-yellow":
        return "text-yellow-500 border border-yellow-500 hover:text-black hover:bg-yellow-400  ";
      case "outline-success":
        return "bg-black text-green-500 border border-green-500 hover:text-white hover:bg-green-700  ";
      case "outline-warning":
        return "bg-black text-amber-400 border border-amber-500 hover:text-white hover:bg-amber-500  ";
      case "outline-primary":
        return "bg-black text-violet-500 border border-violet-500 hover:text-white hover:bg-violet-700  ";

      default:
        return "bg-violet-500 hover:bg-violet-700 hover:bg-gra text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75";
    }
  };
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`
 
        ${getVariant()}  transition duration-500  ${
            !paddingLess && "py-2 px-4"
          }  ${!square && "rounded-md"} active:scale-95 ${className} `}
        >
          {children}
        </Link>
      ) : (
        <button
          {...props}
          type={type}
          className={`
 
        ${getVariant()}  transition duration-500  ${
            !paddingLess && "py-2 px-4"
          }  ${!square && "rounded-md"} active:scale-95 ${className} `}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
