import './productGrid.css';
import { getProductsByCategory } from '../../api/productsApi.ts';
import { Product } from '../product/Product.ts';

export async function ProductGrid(category: string, order: string = 'asc') {
  try {
    const products = await getProductsByCategory(category, 'price', order);
    const productCards = products.map((product) => Product(product));
    return ` 
  <div class="container">
     <div class="columns is-multiline is-mobile"> 
        ${productCards
          .map(
            (card) =>
              `<div class="column is-one-third-tablet is-half-mobile">${card}</div>`,
          )
          .join('')}
     </div>
  </div>
  `;
  } catch (error) {
    console.error(error + ' ProductGrid');
    return '';
  }
}
