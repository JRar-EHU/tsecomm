import { NotificationBar } from '../components/notificationBar/NotificationBar.ts';
import { Header } from '../components/header/Header.ts';
import { Footer } from '../components/footer/Footer.ts';
import { NavBar } from '../components/navBar/NavBar.ts';
import { orderConfirmed } from '../components/orderComfirmed/OrderConfirmed.ts';
import router from '../router.ts';

export async function OrderConfirmationPage(): Promise<string> {
  try {
    const html = `
    ${NotificationBar()}
    ${Header()}
    ${NavBar('Order Confirmation')}
    ${orderConfirmed()}
    ${Footer()}
  `;

    setTimeout(() => {
      router.navigate('/');
    }, 5000);

    return html;
  } catch (error) {
    console.log(error);
    return `<p>OrderConfirmationPage error</p><img src="/assets/slomalos.jpg" alt="error">`;
  }
}
