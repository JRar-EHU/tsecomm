import type { Product } from '../Types.ts';

export async function getProductById(
  id: number,
): Promise<Promise<Product> | null> {
  try {
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    return resp.json();
  } catch (error) {
    console.error('Error fetching product by id:', error);
    return null;
  }
}

export async function getProductsByCategory(
  category: string,
  sortBy: string = 'price',
  order: string = 'asc',
): Promise<Product[]> {
  try {
    const resp = await fetch(
      `https://dummyjson.com/products/category/${category}?sortBy=${sortBy}&order=${order}`,
    );
    const data = await resp.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const resp = await fetch('https://dummyjson.com/products/category-list');
    return resp.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
