import './orderConfirmed.css';

export function orderConfirmed() {
  return ` 
    <section class="section py-1"> 
      <p class="orderConfirmed--text__title mb-4">Order Confirmation</p>
      <div class=" box orderConfirmed--box is-shadowless is-rounded p-3"> 
        <p class="orderConfirmed--text__subtitle ">Success! Your order has been confirmed. Please check out your email address to track delivery progress.</p>
      </div>
    </section>
  `;
}
