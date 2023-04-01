import React from "react";
import { countPageAmount } from "../../helpers/countPageAmount";

import { IPaginationProps } from "../../types/components.interfaces";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";

import pagination_styles from "../../styles/Pagination.module.css";

const Pagination: React.FC<IPaginationProps> = ({
  productsPerPage,
  totalProducts,
  selectPage,
  activePage,
}) => {
  const pageNumbers = countPageAmount(totalProducts, productsPerPage);

  const isLastPage = activePage === pageNumbers.length;
  const isFirstPage = activePage === 1;

  const handleNextPage = () => {
    const nextPageNumber = activePage + 1;
    selectPage(nextPageNumber);
  };

  const handlePrevPage = () => {
    const nextPageNumber = activePage - 1;
    selectPage(nextPageNumber);
  };

  return (
    <div className={pagination_styles.container}>
      {!isFirstPage && (
        <button
          className={pagination_styles.btn_swap_page}
          onClick={handlePrevPage}
        >
          <LeftArrow></LeftArrow>
        </button>
      )}

      <ul className={pagination_styles.page_numbers}>
        {pageNumbers.map((pgNum: number) => (
          <li
            onClick={() => selectPage(pgNum)}
            className={`${
              activePage === pgNum
                ? pagination_styles.active_page
                : pagination_styles.inactive_page
            }`}
            key={pgNum}
          >
            {pgNum}
          </li>
        ))}
      </ul>

      {!isLastPage && (
        <button
          className={pagination_styles.btn_swap_page}
          onClick={handleNextPage}
        >
          <RightArrow></RightArrow>
        </button>
      )}
    </div>
  );
};

export default Pagination;
