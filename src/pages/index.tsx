import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { IProduct } from "../types/data.interfaces";
import { IHomePageProps } from "../types/components.interfaces";

import home_styles from "../styles/Home.module.css";
import { URL } from "../contstants/api";
import Button from "../components/Common/Button";

export const getStaticProps: GetStaticProps<{
  products: IProduct[];
}> = async () => {
  const res = await fetch(URL);
  const products: IProduct[] = await res.json();

  return { props: { products } };
};

const Home: NextPage<IHomePageProps> = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [productList, setProductsList] = useState<IProduct[]>(products);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(3);

  // Get Current BEERS
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const selectPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Head>
        <title>Мини магазин</title>
        <meta name="description" content="Тест" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={home_styles.container}>
        <h1 className={home_styles.title}>Список товаров</h1>

        <ProductList
          products={currentProducts}
          isLoading={loading}
        ></ProductList>

        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={productList?.length}
          selectPage={selectPage}
          activePage={currentPage}
        ></Pagination>

        <div className={home_styles.buttons}>
          <Button stateType="default" isLink={false} size="big" inline={false}>
            default
          </Button>
          <Button stateType="success" isLink={true} size="big" inline={false}>
            success
          </Button>
          <Button
            stateType="danger"
            isLink={false}
            size="normal"
            inline={false}
          >
            danger
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
