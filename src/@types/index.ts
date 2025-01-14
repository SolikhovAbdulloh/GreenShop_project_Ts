export interface FieldType {
  email?: string;
  password?: string;
}
export interface RegisterType {
  name?: string;
  email?: string;
  password?: string;
  surname?: string;
}
export interface HeroSliderType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  big_img_url: string;
  small_img_url: string;
  buttonText: string;
}
export interface useQueryTypes {
  pathname: string;
  url: string;
  params?: object;
}
export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  __v: number;
  _id: string;
}
export interface CardType {
  category: string;
  comments: string[];
  created_at: string;
  created_by: string;
  description: string;
  detailed_images: string[];
  discount: boolean;
  discount_price: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: string[];
  title: string;
  views: number;
  __v: number;
  _id: string;
}

export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  __v: number;
  _id: string;
}

export interface TitleCategory {
  id: number;
  title: string;
  label: string;
}
export interface options {
  id: number;
  value: string;
  label: string;
}

export interface DataType {
  data?:CardType;
  isLoading:boolean;
  isError:boolean;
}