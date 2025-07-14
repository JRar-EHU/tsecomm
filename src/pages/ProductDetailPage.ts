import { NotificationBar } from '../components/notificationBar/NotificationBar.ts';
import { Header } from '../components/header/Header.ts';
import { Footer } from '../components/footer/Footer.ts';
import { ProductCard } from '../components/productCard/ProductCard.ts';
import type { RouterData } from '../Types.ts';
import { NavBar } from '../components/navBar/NavBar.ts';
import { getProductById } from '../api/productsApi.ts';
import { cartStore, syncInputValue } from '../utils/cartUtils.ts';

export async function ProductDetailPage(params?: RouterData): Promise<string> {
  try {
    if (!params) throw new Error('params required');
    const id = +params.data.id;
    const product = await getProductById(id);
    if (!product) {
      return `<p>getProduct error</p><img src="/assets/slomalos.jpg" alt="error">`;
    }
    const productCard = await ProductCard(id);

    const html = `
    ${NotificationBar()}
    ${Header()}
    ${NavBar(product.category, product.title)}
    ${productCard}
    ${Footer()}
  `;

    setTimeout(() => {
      // Картинки
      const images = document.querySelectorAll(
        '.productCard--img__thumbnail-container',
      );
      const mainImage = document.getElementById('main-product-image')!;
      const thumbnails = document.getElementById('thumbnails');
      thumbnails?.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.tagName !== 'IMG') return;
        images.forEach((image) => {
          image.classList.remove('productCard--img__is-active');
        });
        target
          .closest('.productCard--img__thumbnail-container')!
          .classList.add('productCard--img__is-active');
        mainImage!.setAttribute('src', target.getAttribute('src')!);
      });

      // Кнопки
      const controlButtons = document.getElementById('controlButtons')!;
      const input = controlButtons.querySelector('input') as HTMLInputElement;
      const maxQuantity = product.stock;
      controlButtons.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement;
        const action = target.dataset.action;
        const rawValue = parseInt(input.value.trim());
        const currentQty = isNaN(rawValue) ? 1 : rawValue;
        const cartItems = cartStore.get();
        const inCart = cartItems.find((item) => item.id === product.id);
        const quantityInCart = inCart ? inCart.quantity : 0;
        const maxAvailable = product.stock - quantityInCart;

        switch (action) {
          case '-':
            syncInputValue(input, currentQty - 1, maxQuantity);
            break;

          case '+':
            if (currentQty < maxAvailable) {
              syncInputValue(input, currentQty + 1, maxAvailable);
            }
            break;

          case 'add-to-cart':
            try {
              cartStore.add(product, currentQty);
              input.value = '1';
              console.log('product added');
            } catch (error) {
              console.error('add to cart error', error);
            }
            break;
        }
      });

      // Ручной ввод
      input.addEventListener('input', () => {
        const rawValue = parseInt(input.value.trim());
        if (isNaN(rawValue)) return;
        syncInputValue(input, rawValue, maxQuantity);
      });
    }, 0);

    return html;
  } catch (error) {
    console.log(error);
    return `<p>ProductDetailPage Error</p><img src="/assets/slomalos.jpg" alt="error">`;
  }
}
