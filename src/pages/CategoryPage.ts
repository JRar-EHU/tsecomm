import { Footer } from '../components/footer/Footer.ts';
import { Header } from '../components/header/Header.ts';
import { NotificationBar } from '../components/notificationBar/NotificationBar.ts';
import { NavBar } from '../components/navBar/NavBar.ts';
import { FilterMenu } from '../components/filterMenu/FilterMenu.ts';
import { ProductGrid } from '../components/productGrid/ProductGrid.ts';
import type { RouterData } from '../Types.ts';

export async function CategoryPage(params?: RouterData): Promise<string> {
  if (!params) throw new Error('params required');
  const { categoryName } = params.data;
  try {
    const productGrid = await ProductGrid(categoryName);

    const html = ` 
      ${NotificationBar()}
      ${Header()}
      ${NavBar(categoryName)}
      <div class="section py-1">
  <div class="columns">
    <div id="filterContainer" class="column is-one-quarter is-hidden-mobile">
      <div id="filter">${FilterMenu()}</div>
    </div>
    <div class="column"> 
      <div class="is-flex is-justify-content-space-between is-align-content-center p-0">
        <p class="productGrid--text mb-4 is-capitalized">${categoryName.replace('-', ' ')}</p>
        <button id="filterToggle" class="is-hidden-tablet mb-4 "> 
            <figure class="image"> 
              <img src="/assets/filters.svg" alt="filters">
            </figure>
        </button>
      </div>
      <div id="product-grid" class="column p-0">
      ${productGrid}
    </div>
    </div>
  </div>
</div>
      <div class="modal ">
  <div class="modal-background filterMenu--modal__bg"></div>
  <div class="modal-content filterMenu--modal__bottom"></div>
</div>
      ${Footer()}
  `;

    setTimeout(() => {
      const sort = document.getElementById('sort')!;
      const modalContainer = document.querySelector('.modal-content')!;
      const modal = document.querySelector('.modal')!;
      const modalOpenButton = document.getElementById('filterToggle')!;
      const filterContainer = document.getElementById('filterContainer')!;
      const filter = document.getElementById('filter')!;
      const filterMenu = document.getElementById('filterMenu')!;
      sort.addEventListener('click', async (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName !== 'BUTTON') {
          return;
        }
        const sort = (event.target as HTMLElement).dataset.sort || 'asc';
        const sortedGrid = await ProductGrid(categoryName, sort);
        document.getElementById('product-grid')!.innerHTML = sortedGrid ?? '';

        document
          .querySelectorAll('.filterMenu--text__sort')
          .forEach((link) =>
            link.classList.remove('filterMenu--sort__is-active'),
          );
        (event.target as HTMLElement).classList.add(
          'filterMenu--sort__is-active',
        );
      });
      modalOpenButton.addEventListener('click', () => {
        filterMenu.classList.add('pb-0', 'filterMenu--BgModal');
        filter.classList.add('is-rounded');
        modal.classList.add('is-active');
        modalContainer.appendChild(filter);
      });
      modal.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('modal-background')) {
          filterMenu.classList.remove('pb-0', 'filterMenu--BgModal');
          filter.classList.remove('is-rounded');
          modal.classList.remove('is-active');
          filterContainer.appendChild(filter);
        }
      });
    }, 0);

    return html;
  } catch (error) {
    console.log(error);
    return `<p>CategoryPage error</p><img src="/assets/slomalos.jpg" alt="error">`;
  }
}
