import { NotificationBar } from '../components/notificationBar/NotificationBar.ts';
import { Header } from '../components/header/Header.ts';
import { Footer } from '../components/footer/Footer.ts';
import { NavBar } from '../components/navBar/NavBar.ts';
import { CheckoutForm } from '../components/checkoutForm/CheckoutForm.ts';
import { OrderSummary } from '../components/orderSummary/OrderSummary.ts';
import router from '../router.ts';
import { cartStore } from '../utils/cartUtils.ts';

export async function CheckoutPage(): Promise<string> {
  try {
    const orderSummary = await OrderSummary('checkout');

    const html = `
      ${NotificationBar()}
      ${Header()}
      ${NavBar('Checkout')} 
        <div class="section py-1"> 
          <p class="checkout-form--text__title mb-5">Checkout</p>
          <div class="columns">
            <div class="column is-two-thirds">${CheckoutForm()}</div>
            <div class="column">
              ${orderSummary}
            </div>
          </div>  
        </div>
      ${Footer()}
  `;

    setTimeout(() => {
      const orderSummaryButton = document.getElementById('orderSummaryButton');
      const form = document.getElementById('checkoutForm') as HTMLFormElement;
      if (!form || !orderSummaryButton) return;
      form.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.tagName === 'INPUT') {
          target.classList.remove('checkout-form--input__invalid');
        }
      });
      orderSummaryButton.addEventListener('click', (e) => {
        e.preventDefault();

        const inputs = [...form.querySelectorAll('input')];
        let isFormValid = true;

        inputs.forEach((input) => {
          if (!input.checkValidity()) {
            input.classList.add('checkout-form--input__invalid');
            isFormValid = false;
          }
        });

        if (isFormValid) {
          cartStore.clear();
          router.navigate('/order-confirmation');
        }
      });
    }, 0);

    return html;
  } catch (error) {
    console.log(error);
    return `<p>CheckoutPage error</p><img src="/assets/slomalos.jpg" alt="error">`;
  }
}
