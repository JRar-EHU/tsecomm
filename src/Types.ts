export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  brand?: string;
  category: string;
  thumbnail: string;
  images: string[];
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface RouterData {
  data: { [key: string]: string };
}

export interface FieldValidation {
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  validation?: FieldValidation;
}
