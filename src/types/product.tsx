export interface IProducts {
  id: number;
  sku: string;
  title: string;
  category: string;
  tags: string[];
  normalPrice: number;
  salePrice: number;
  discountPercentage: number;
  new: boolean;
  slug?: string;
  description: IDescription;
  colors: IColors[];
  sizes: string[];
  rating: number;
  images: IImages;
}

export interface IDescription {
  short: string;
  long: string;
}

export interface IColors {
  name: string;
  hex: string;
}

export interface IImages {
  mainImage: string;
  gallery: string[];
}
