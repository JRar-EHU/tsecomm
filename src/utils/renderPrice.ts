import type { Product } from '../Types.ts';

export function renderPrice(product: Product): string {
  const { price, discountPercentage } = product;
  const originalPrice = price.toFixed(2);
  if (!discountPercentage || discountPercentage < 1) {
    return `
    <div class="is-flex is-flex-direction-row is-flex-wrap-wrap">
      <p class=" product--text__price mr-1">$${originalPrice}</p>
    </div>
  `;
  }
  const finalPrice = (price * (1 - discountPercentage / 100)).toFixed(2);
  const discount = Math.round(discountPercentage);

  return `
    <div class="is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center">
      <p class="product--text__price mr-1">$${finalPrice}</p>
      <p class="product--text__price-full mr-1">$${originalPrice}</p>
      <p class="tag is-danger is-light is-rounded product--text__price-discount">-${discount}%</p>
    </div>
  `;
}
