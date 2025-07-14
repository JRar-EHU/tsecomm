import './categoriesGrid.css';
import { getCategories } from '../../api/productsApi.ts';

export async function CategoriesGrid() {
  const categories = await getCategories();
  // const categoriesGrid = categories.slice(0, 12);

  return `
    <section id="categories" class="section">
      <div class="categories--text__title pb-6">Categories</div>
      <div class="columns is-multiline is-mobile">
          ${categories
            .map(
              (category) => `
                 <div class="column is-half-mobile is-one-quarter-tablet "> 
                    <a href="/category/${category}" data-navigo >
                      <div class="categories--aspect-wrapper">
                        <div class="box is-shadowless categories--item is-flex is-align-items-center is-justify-content-center  ">
                          <div class="categories--text__elements is-capitalized">${category.replace('-', ' ')}</div>
                        </div>
                      </div>
                    </a>
                 </div>
                
              `,
            )
            .join('')}
      </div>  
    </section>
  `;
}
