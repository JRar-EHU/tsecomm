import './orderSummary.css';
import { cartStore } from '../../utils/cartUtils.ts';

export async function OrderSummary(
  currentPage: 'cart' | 'checkout',
): Promise<string> {
  if (cartStore.isEmpty()) return '';

  const subtotal = cartStore.getSubTotal();
  const total = cartStore.getTotal();
  const discount = subtotal - total;

  const buttonText =
    currentPage === 'cart' ? 'Go to Checkout ->' : 'Go to Payments ->';

  return ` 
    <div class="box is-shadowless orderSummary p-2"> 
      <div class="columns">
        <div class="column"> 
          <p class="orderSummary--text__title p-2">Order Summary</p>
          <div class="p-2 mb-2 is-flex is-justify-content-space-between">
            <p class="orderSummary--text__subtitle">Subtotal</p>
            <p class="orderSummary--text__price">$${subtotal.toFixed(2)}</p>
          </div>
          <div class="p-2 mb-2 is-flex is-justify-content-space-between">
            <p class="orderSummary--text__subtitle">Discount</p>
            <p class="orderSummary--text__price discount">-$${discount.toFixed(2)}</p>
          </div>
          <hr class="hr"/>
          <div class="p-2 is-flex is-justify-content-space-between"> 
            <p class="orderSummary--text__total mb-2">Total</p>
            <p class="orderSummary--text__price--total">$${total.toFixed(2)}</p>
          </div>
          <div class="p-2"> 
            <button id="orderSummaryButton" class="button is-black is-rounded is-fullwidth orderSummary--button orderSummary--text__button">${buttonText}</button>
          </div>
        </div> 
      </div>
    </div>
  `;
}
