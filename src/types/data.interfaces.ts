export interface IProduct {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
  rating: IProductRating;
}

export interface IProductRating {
  rate: number;
  count: number;
}
