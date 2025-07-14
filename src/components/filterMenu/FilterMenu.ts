import './filterMenu.css';

export function FilterMenu() {
  return ` 
      <aside id="filterMenu" class="panel filterMenu--panel px-4  is-shadowless">
        <div class="panel-block is-flex is-justify-content-space-between"> 
          <p class="filterMenu--text__title py-2">Filters</p>
          <img src="/assets/filters.svg" alt="filters">
        </div> 
        <div class="panel-block"> 
          <div class="py-2">
              <p class="filterMenu--text__title mb-2">Sort</p>
              <ul id="sort">
                <li class="my-2"><button class="filterMenu--text__sort filterMenu--sort__is-active" data-sort="asc">Ascending</button></li>
                <li><button class="filterMenu--text__sort" data-sort="desc">Descending</button></li>
              </ul>
          </div>
        </div> 
        <div class="panel-block is-flex is-flex-direction-column"> 
            <button class="button filterMenu--button is-fullwidth is-black is-rounded my-2 filterMenu--text__button">Apply Filter</button>
            <button class="button filterMenu--button is-fullwidth is-light is-rounded my-2 filterMenu--text__button" style="background-color: #F2F0F1;">Reset Filter</button>
        </div> 
      </aside>
  `;
}
