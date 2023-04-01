import React from "react";
import { IProduct } from "./data.interfaces";

export interface IHomePageProps {
  products: IProduct[];
}

export interface IPaginationProps {
  productsPerPage: number;
  totalProducts: number;
  selectPage: (pageNum: number) => void;
  activePage: number;
}

export interface IBadgeProps {}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  stateType: "default" | "success" | "danger";
  isLink: boolean;
  size: "big" | "normal";
  inline: boolean;
  children: React.ReactNode;
}

export interface IProductCardProps {
  link: string;
  badge: boolean;
  image: string;
  title: string;
  description: string;
}

export interface IProductListProps {
  products: IProduct[];
  isLoading: boolean;
}
