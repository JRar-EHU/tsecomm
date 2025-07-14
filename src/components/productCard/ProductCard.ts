import './productCard.css';
import { getProductById } from '../../api/productsApi.ts';
import { renderRating } from '../../utils/renderRaitingStars.ts';
import { renderPrice } from '../../utils/renderPrice.ts';

export async function ProductCard(id: number) {
  const product = await getProductById(id);
  if (!product) {
    return `<p>getProduct error</p><img src="/assets/slomalos.jpg" alt="error">`;
  }
  const images = product.images
    .slice(0, 3)
    .map(
      (img) => `
        <div class="box productCard is-shadowless productCard--img__thumbnail-container">
          <figure class="image"> 
            <img 
            src="${img}" 
            alt="Product thumbnail " 
            data-src="${img}" 
            class="productCard--img  "
            >
          </figure>
      </div>
    `,
    )
    .join('');

  const html = `<section class="section pt-1">
  <div class="columns">
    <div class="column is-half">
      <div class="columns is-mobile productCard--img-container__mobile">
        ${
          product.images.length > 1
            ? `<div id="thumbnails" class="column is-one-quarter-tablet ">
          <div class="productCard--thumbnail-container__mobile"> 
            ${images}
          </div>
        </div>`
            : ''
        }
        
        <div class="column">
          <div class="box productCard is-shadowless">
            <figure class="image">
              <img id="main-product-image" class="productCard--img" src="${product.thumbnail}" alt="${product.title}" />
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-half is-flex is-flex-direction-column is-justify-content-space-between">
      <div class="is-flex is-flex-direction-column is-align-items-flex-start productCard--text">
        <p class="productCard--text__title">${product.title}</p>
        <div class="rating my-2">
          <div class="product--rating__list is-flex is-flex-direction-row">
            ${renderRating(product.rating)}
          </div>
          <div class="rating__stat">${product.rating.toFixed(1)}/5</div>
        </div>
        ${renderPrice(product)}
        <p class="productCard--text__description mt-1">${product.description}</p>
      </div>
      <hr class="productBar--hr">
      <div class="is-flex is-flex-direction-column is-align-items-flex-start">
        <p class="productCard--text__description mb-2">Brand</p>
        <p class="productCard--text__info">${product.brand ?? 'No brand'}</p>
      </div>
      <hr class="productBar--hr">
      <div class="is-flex is-flex-direction-column is-align-items-flex-start">
        <p class="productCard--text__description  mb-2">In Stock</p>
        <p class="productCard--text__info">${product.stock} items</p>
      </div>
      <hr class="productBar--hr">
      <div id="controlButtons" class="is-flex is-align-items-stretch">
        <div class="mr-5">
          <div class="buttons has-addons mb-0 productCard--text__button ">
            <button class="button is-rounded is-shadowless" data-action="-">-</button>
            <input value="1" class="button productCard--input is-shadowless" placeholder="1" />
            <button class="button is-rounded is-shadowless" data-action="+">+</button>
          </div>
        </div>
        <div class="is-flex-grow-1">
          <button class="button is-rounded is-black is-fullwidth productCard--text__button" data-action="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
   `;

  return html;
}
