import type { CartItem, Product } from '../Types.ts';

const STORAGE_KEY = 'cart';

function loadCart(): CartItem[] {
  const cartJSON = localStorage.getItem(STORAGE_KEY);
  return cartJSON ? JSON.parse(cartJSON) : [];
}

function saveCart(cart: CartItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export const cartStore = {
  get(): CartItem[] {
    return loadCart();
  },

  add(product: Product, quantity: number = 1): number {
    const cart = loadCart();
    const maxStock = product.stock;
    let newQuantity = quantity;
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      newQuantity = Math.min(existing.quantity + quantity, maxStock);
      if (existing.quantity + quantity > maxStock) {
        console.log('out of stock');
        alert('out of stock');
      }
      existing.quantity = newQuantity;
    } else {
      newQuantity = Math.min(quantity, maxStock);
      if (quantity > maxStock) {
        console.log('out of stock');
        alert('out of stock');
      }
      cart.push({ ...product, quantity: newQuantity });
    }
    saveCart(cart);
    return newQuantity;
  },

  getSubTotal(): number {
    return loadCart().reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },

  getTotal(): number {
    return loadCart().reduce((total, item) => {
      if (!item.discountPercentage) {
        return total * item.quantity;
      }
      const discount = item.price * (item.discountPercentage / 100);
      const discountedPrice = item.price - discount;
      return total + discountedPrice * item.quantity;
    }, 0);
  },

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  },

  remove(productId: number): void {
    const updated = loadCart().filter((item) => item.id !== productId);
    saveCart(updated);
  },

  isEmpty(): boolean {
    return loadCart().length === 0;
  },
};

export function syncInputValue(
  inputEl: HTMLInputElement,
  quantity: number,
  maxStock: number,
): number {
  let validQuantity = Math.max(1, Math.min(quantity, maxStock));
  inputEl.value = String(validQuantity);
  return validQuantity;
}
