import classnames from "classnames";

import "./style.scss";

type styleType = "toggle" | "cart" | "options" | "add";

interface ButtonProps {
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  className?: string;
  title: string;
  type?: "button" | "submit" | "reset";
  styleType?: styleType;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  title,
  type = "button",
  styleType = "toggle",
}) => {
  return (
    <button
      className={classnames("button", styleType, className)}
      onClick={onClick}
      title={title}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
