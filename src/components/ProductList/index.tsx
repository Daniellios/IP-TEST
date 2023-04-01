import React from "react";
import { IProductListProps } from "../../types/components.interfaces";
import { IProduct } from "../../types/data.interfaces";
import ProductCard from "../ProductCard";

import product_styles from "../../styles/Product.module.css";

const ProductList: React.FC<IProductListProps> = ({ products, isLoading }) => {
  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  return (
    <div className={product_styles.list}>
      {products ? (
        products.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            link={`/beer/` + product.id}
            badge={true}
            image={product?.image}
            title={product?.title}
            description={product?.description}
          />
        ))
      ) : (
        <h1>Ошибка при загрузке</h1>
      )}
    </div>
  );
};

export default ProductList;
