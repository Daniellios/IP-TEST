import Image from "next/image";
import { titleLimit } from "../../helpers/limitTitle";
import { IProductCardProps } from "../../types/components.interfaces";
import Badge from "./Badge";

import product_styles from "../../styles/Product.module.css";

const ProductCard: React.FC<IProductCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={product_styles.card}>
      <Badge></Badge>

      <div className={product_styles.card_image_wrapper}>
        <Image alt={title} src={image} width={180} height={180}></Image>
      </div>

      <div className={product_styles.card_text_wrap}>
        <h2 className={product_styles.card_title}>{titleLimit(title)}</h2>
        <span>Название бренда</span>
      </div>

      <p className={product_styles.card_description}>{description}</p>
    </div>
  );
};

export default ProductCard;
