import { NotificationBar } from '../components/notificationBar/NotificationBar.ts';
import { Header } from '../components/header/Header.ts';
import { Footer } from '../components/footer/Footer.ts';
import { Cart } from '../components/cart/Cart.ts';
import { OrderSummary } from '../components/orderSummary/OrderSummary.ts';
import router from '../router.ts';
import { NavBar } from '../components/navBar/NavBar.ts';
import { cartStore } from '../utils/cartUtils.ts';

export async function CartPage(): Promise<string> {
  try {
    const cartHtml = Cart();
    const orderSummary = await OrderSummary('cart');

    const html = `
      ${NotificationBar()}
      ${Header()}
      ${NavBar('Cart')}
      <div class="section py-2">
        <div class="columns">
          <div id='cartContainer' class="column is-two-thirds">${cartHtml}</div>
          <div id="orderSummaryContainer" class="column">
            ${orderSummary}
          </div>
        </div>
      </div>
      ${Footer()}
    `;

    setTimeout(() => {
      const orderSummaryButton = document.getElementById('orderSummaryButton');
      if (orderSummaryButton) {
        orderSummaryButton.addEventListener('click', () => {
          router.navigate('/checkout');
        });
      }
      const cart = document.getElementById('cartContainer')!;
      const orderSummaryContainer = document.getElementById(
        'orderSummaryContainer',
      )!;
      cart.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.closest('.cart--remove-button')) {
          const button = target.closest('.cart--remove-button') as HTMLElement;
          const id = +button.dataset.id!;
          cartStore.remove(id);
          cart.innerHTML = `${Cart()}`;
          OrderSummary('cart').then((html) => {
            orderSummaryContainer.innerHTML = html;
            const orderSummaryButton =
              document.getElementById('orderSummaryButton');
            if (orderSummaryButton) {
              orderSummaryButton.addEventListener('click', () => {
                router.navigate('/checkout');
              });
            }
          });
        }
      });
    }, 0);

    return html;
  } catch (error) {
    console.error(error);
    return `<p>CartPage Error</p><img src="/assets/slomalos.jpg" alt="error">`;
  }
}
