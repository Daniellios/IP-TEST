import React from "react";

import product_card_styles from "../../styles/Product.module.css";

const Badge: React.FC = () => {
  return <span className={product_card_styles.card_badge}>New</span>;
};

export default Badge;
