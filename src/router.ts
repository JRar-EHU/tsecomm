import Navigo from 'navigo';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage.ts';
import type { RouterData } from './Types.ts';
import { ProductDetailPage } from './pages/ProductDetailPage.ts';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage.ts';
import { CheckoutPage } from './pages/CheckoutPage.ts';
import { CartPage } from './pages/CartPage.ts';

async function renderPage<T>(
  page: (params?: T) => Promise<string>,
  params?: T,
) {
  const app = document.getElementById('app')!;
  try {
    const html = await page(params);
    app!.innerHTML = `<main>${html}</main>`;
  } catch (error) {
    console.error(error);
    app!.innerHTML = `<p>RenderPage() error</p><img src="../public/assets/slomalos.jpg" alt="error">`;
  }
}

const router = new Navigo('/');

router
  .on({
    '/': () => renderPage(HomePage),
    '/category/:categoryName': (params: RouterData) =>
      renderPage(CategoryPage, params),
    '/product/:id': (params: RouterData) =>
      renderPage(ProductDetailPage, params),
    '/cart': () => renderPage(CartPage),
    '/checkout': () => renderPage(CheckoutPage),
    '/order-confirmation': () => renderPage(OrderConfirmationPage),
  })
  .resolve();

export default router;
