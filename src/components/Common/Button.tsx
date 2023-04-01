import React from "react";
import { IButtonProps } from "../../types/components.interfaces";

import button_styles from "../../styles/Button.module.css";
import Link from "next/link";

const Button: React.FC<IButtonProps> = ({
  stateType,
  size,
  inline,
  isLink,
  children,
  ...props
}) => {
  return (
    <button
      className={`${button_styles.btn} ${
        stateType === "danger"
          ? button_styles.danger
          : stateType === "success"
          ? button_styles.success
          : button_styles.default
      } 
      ${size === "big" ? button_styles.big : button_styles.small}
      ${inline ? button_styles.inline : button_styles.block}`}
      {...props}
    >
      {isLink ? <Link href={"/"}>{children}</Link> : children}
    </button>
  );
};

export default Button;
