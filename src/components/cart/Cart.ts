import './cart.css';
import { cartStore } from '../../utils/cartUtils.ts';

export function Cart() {
  const cartItems = cartStore.get();
  if (cartStore.isEmpty()) {
    return `
    <p class="cart-text__is-empty">Cart is empty.</p>
  `;
  }

  const html = cartItems
    .map(
      (
        { id, title, thumbnail, price, quantity, discountPercentage },
        index,
      ) => {
        const cardHtml = `
<div class="box is-shadowless is-flex is-justify-content-space-between m-0 cart--container__mobile p-0">
  <div class="is-flex">
    <div class="box is-shadowless cart--img m-0 ">
      <figure class="image is-128x128">
        <a href="/product/${id}" data-navigo>
          <img class="product__image" src="${thumbnail}" alt="${title}" />
        </a>
      </figure>
    </div>
    <div class="is-flex is-flex-direction-column is-justify-content-space-between ml-4 py-2">
      <a class="cart--text__title my-2" href="/product/${id}" data-navigo>${title}</a>
      <div class="cart--text__price is-flex is-flex-direction-row">
        <p>$${discountPercentage ? (price * (1 - discountPercentage / 100)).toFixed(2) : price.toFixed(2)}</p>
        ${quantity > 1 ? `<p class="cart--text__price ml-1">x ${quantity}</p>` : ''}
      </div>
    </div>
  </div>
  <div>
    <button class="button is-rounded cart--remove-button cart--text__button is-shadowless is-danger" data-id="${id}">
      x
    </button>
  </div>
</div>
      `;
        const isLast = index === cartItems.length - 1;
        return isLast ? cardHtml : `${cardHtml}<hr class="my-2"/>`;
      },
    )
    .join('');

  return `
    <div class="box is-shadowless cart cart-items">
      ${html}
    </div>
  `;
}
