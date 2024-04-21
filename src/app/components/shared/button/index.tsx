import classnames from "classnames";

import "./style.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  title: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  title,
  type = "button",
}) => {
  return (
    <button
      className={classnames("button", className)}
      onClick={onClick}
      title={title}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
