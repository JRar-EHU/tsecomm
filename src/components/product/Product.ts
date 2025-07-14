import './Product.css';
import type { Product } from '../../Types.ts';
import { renderRating } from '../../utils/renderRaitingStars.ts';
import { renderPrice } from '../../utils/renderPrice.ts';

export function Product(product: Product): string {
  const { id, title, thumbnail, rating } = product;
  return `
    <div> 
      <div class="box product is-shadowless mb-1">
        <figure class="image"> 
        <a href="/product/${id}" data-navigo><img class="product__image" src="${thumbnail}" alt="${title}"/></a>
        </figure> 
        
      </div>
      <a class="product--text__title my-2" href="/product/${id}" data-navigo>${title}</a>
      <div class="rating my-2">
        <div class="product--rating__list is-flex is-flex-direction-row">${renderRating(rating)}</div> 
        <div class="product--text__rating mt-1">${rating.toFixed(1)}/5</div> 
      </div>
      ${renderPrice(product)}
    </div>
  `;
}
