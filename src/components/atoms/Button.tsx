import {FC} from "react";

type ButtonProps = {
  text: string
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({text, disabled}) => {
  return <button className={`h-full w-full ${disabled ? 'bg-disabled' : 'bg-button hover:opacity-75'} text-mobileH2 lg:text-h2 rounded p-2`} disabled={disabled}>{text}</button>
};

Button.defaultProps = {
  disabled: false
}

export default Button;
