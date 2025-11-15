/*
  menu.js
  Handles rendering the menu grid, filters, modals and cart interactions.
  Keep data in the `ITEMS` array below (flattened list of dishes).
*/

// -----------------------------
// Data: flattened list of menu items
// -----------------------------

const ITEMS = [
  { name:'Dhuska', price:99, img:'Images/Dhuska.png', desc:'Deep-fried savory rice-lentil pancake.', type:'Veg', tribe:'Santhal', state:'Jharkhand', ingredients:['Rice','Lentils','Oil','Spices'] },
  { name:'Rugra Curry', price:189, img:'Images/Rugra-curry.png', desc:'Wild mushroom curry from forests.', type:'Veg', tribe:'Munda', state:'Jharkhand', ingredients:['Rugra mushroom','Garlic','Onion','Spices'] },
  { name:'Red Ant Chutney', price:79, img:'Images/red-ant-chutney.png', desc:'Traditional tangy chutney made with ants.', type:'Non-Veg', tribe:'Oraon', state:'Jharkhand', ingredients:['Red ants','Salt','Chili','Garlic'] },
  { name:'Handia', price:149, img:'Images/handia.png', desc:'Fermented rice beverage — ceremonial drink.', type:'Veg', tribe:'Santhal', state:'Jharkhand', ingredients:['Rice','Herbs','Yeast','Water'] },
  { name:'Bamboo Shoot Pickle', price:129, img:'Images/bamboo.png', desc:'Preserved bamboo shoots with spices.', type:'Veg', tribe:'Oraon', state:'Jharkhand', ingredients:['Bamboo shoot','Oil','Chili','Salt'] },

  { name:'Pakhala', price:119, img:'Images/pakhala.png', desc:'Fermented rice served with sides.', type:'Veg', tribe:'Bonda', state:'Odisha', ingredients:['Rice','Water','Curd','Salt'] },
  { name:'Arisa Pitha', price:139, img:'Images/arisa-pitha.png', desc:'Sweet rice pancake — harvest special.', type:'Veg', tribe:'Kondh', state:'Odisha', ingredients:['Rice','Jaggery','Oil','Sesame'] },
  { name:'Dalma', price:159, img:'Images/dalma.png', desc:'Lentil-vegetable curry with seasonal vegetables.', type:'Veg', tribe:'Santhal', state:'Odisha', ingredients:['Dal','Vegetables','Jeera','Ginger'] },
  { name:'Mudhi Mansa', price:179, img:'Images/mudhi-mansa.png', desc:'Popped rice with spiced meat.', type:'Non-Veg', tribe:'Kondh', state:'Odisha', ingredients:['Meat','Popped rice','Spices'] },

  { name:'Smoked Bamboo Chicken', price:299, img:'Images/bamboo.png', desc:'Chicken cooked inside bamboo.', type:'Non-Veg', tribe:'Naga', state:'Nagaland', ingredients:['Chicken','Bamboo shoot','Ginger','Garlic'] },
  { name:'Axone (Fermented Soy)', price:99, img:'Images/axone-soy.png', desc:'Fermented soybean — strong Naga flavor.', type:'Veg', tribe:'Ao', state:'Nagaland', ingredients:['Soybean','Salt','Ferment culture'] },
  { name:'Naga Pork', price:249, img:'Images/naga-pork.png', desc:'Pork cooked with Naga chilies.', type:'Non-Veg', tribe:'Sema', state:'Nagaland', ingredients:['Pork','Bhut jolokia','Garlic'] },

  { name:'Jadoh', price:249, img:'Images/jodoh.png', desc:'Rice with pork — Khasi speciality.', type:'Non-Veg', tribe:'Khasi', state:'Meghalaya', ingredients:['Rice','Pork','Black sesame','Onion'] },
  { name:'Doh Khleh', price:189, img:'Images/dohkhel.png', desc:'Pork salad with herbs.', type:'Non-Veg', tribe:'Garo', state:'Meghalaya', ingredients:['Pork','Onion','Chili','Lemon'] },

  { name:'Kola Bhaat', price:179, img:'Images/kola-bhaat.png', desc:'Red rice with coconut.', type:'Veg', tribe:'Kurichia', state:'Kerala', ingredients:['Red rice','Coconut','Curry leaves'] },
  { name:'Kappa Biryani', price:189, img:'Images/kappa-biryani.png', desc:'Tapioca-based biryani.', type:'Veg', tribe:'Paniyan', state:'Kerala', ingredients:['Tapioca','Spices','Onion'] },

  { name:'Kutki Khichdi', price:149, img:'Images/kutki-khicdi.jpg', desc:'Millet-based wholesome khichdi.', type:'Veg', tribe:'Bhil', state:'Rajasthan', ingredients:['Millet','Dal','Ghee','Spices'] },
  { name:'Bajra Roti', price:89, img:'Images/bajra-roti.jpg', desc:'Pearl millet flatbread.', type:'Veg', tribe:'Garasia', state:'Rajasthan', ingredients:['Bajra flour','Salt','Water'] },

  { name:'Millet Pongal', price:149, img:'Images/millet-pongal.jpg', desc:'Savory millet porridge.', type:'Veg', tribe:'Toda', state:'Tamil Nadu', ingredients:['Millet','Dal','Pepper','Ghee'] },
  { name:'Ragi Dosa', price:99, img:'Images/ragib-dosa.jpg', desc:'Finger millet dosa.', type:'Veg', tribe:'Kota', state:'Tamil Nadu', ingredients:['Ragi flour','Water','Salt'] },

  { name:'Pulihora', price:139, img:'Images/pulihora.jpg', desc:'Tamarind rice with spices.', type:'Veg', tribe:'Koya', state:'Andhra Pradesh', ingredients:['Rice','Tamarind','Peanuts'] },
  { name:'Kodi Pulao', price:179, img:'Images/kodi-pulao.jpg', desc:'Chicken pulao.', type:'Non-Veg', tribe:'Gond', state:'Andhra Pradesh', ingredients:['Chicken','Spices','Rice'] },

  { name:'Smoked Fish with Herbs', price:229, img:'Images/smoked-fish.jpg', desc:'River fish smoked and spiced.', type:'Non-Veg', tribe:'Gond', state:'Telangana', ingredients:['Fish','Herbs','Chili'] },
  { name:'Raagi Sangati', price:129, img:'Images/rangi-sangati.jpg', desc:'Millet with spicy curry.', type:'Veg', tribe:'Chenchu', state:'Telangana', ingredients:['Ragi','Water','Salt'] },

  { name:'Bamboo Shoot Curry', price:199, img:'Images/bamboo-shoot-curry.jpg', desc:'Bamboo shoots cooked with meat.', type:'Non-Veg', tribe:'Apatani', state:'Arunachal Pradesh', ingredients:['Bamboo shoot','Meat','Spices'] },
  { name:'Smoked Pork', price:249, img:'Images/smoked-porked.jpg', desc:'Smoked pork with herbs.', type:'Non-Veg', tribe:'Galo', state:'Arunachal Pradesh', ingredients:['Pork','Herbs','Salt'] },

  { name:'Eromba', price:199, img:'Images/eromba.jpg', desc:'Mashed vegetables with fermented fish.', type:'Non-Veg', tribe:'Meitei', state:'Manipur', ingredients:['Veggies','Fish','Chili'] },
  { name:'Chak-hao Pitha', price:129, img:'Images/chak-hao-pitha.jpg', desc:'Black rice sweet pancake.', type:'Veg', tribe:'Tangkhul', state:'Manipur', ingredients:['Black rice','Sugar','Oil'] },

  { name:'Mui Borok', price:139, img:'Images/mui-borok.jpg', desc:'Local tribal meat dish.', type:'Non-Veg', tribe:'Tripuri', state:'Tripura', ingredients:['Meat','Spices'] },
  { name:'Bamboo Fish', price:179, img:'Images/bamboo-fish.jpg', desc:'Fish cooked in bamboo.', type:'Non-Veg', tribe:'Reang', state:'Tripura', ingredients:['Fish','Bamboo','Salt'] },

  { name:'Hilsa Smoke', price:229, img:'Images/hilsa-smoke.jpg', desc:'Smoked hilsa with herbs.', type:'Non-Veg', tribe:'Santhal', state:'West Bengal', ingredients:['Hilsa','Herbs','Salt'] },
  { name:'Panta Bhat', price:109, img:'Images/panta-bhaat.jpg', desc:'Fermented rice breakfast.', type:'Veg', tribe:'Munda', state:'West Bengal', ingredients:['Rice','Water','Salt'] },

  { name:'Varan Bhaat (Millet)', price:119, img:'Images/varan-bhaat.png', desc:'Millet with lentil.', type:'Veg', tribe:'Warli', state:'Maharashtra', ingredients:['Millet','Dal','Salt'] },
  { name:'Mahua Ladoo', price:129, img:'Images/mahua-ladoo.png', desc:'Sweet Mahua ladoo.', type:'Veg', tribe:'Gond', state:'Maharashtra', ingredients:['Mahua','Sugar','Ghee'] },

  { name:'Siddu', price:159, img:'Images/siddu.png', desc:'Steamed wheat dumpling.', type:'Veg', tribe:'Gaddi', state:'Himachal Pradesh', ingredients:['Wheat flour','Yeast','Ghee'] },
  { name:'Trout Smoke', price:229, img:'Images/trout-smoke.png', desc:'Smoked trout.', type:'Non-Veg', tribe:'Lahaula', state:'Himachal Pradesh', ingredients:['Trout','Salt','Herbs'] },

  { name:'Gahat Soup', price:119, img:'Images/gahat-soup.png', desc:'Horse gram soup.', type:'Veg', tribe:'Jaunsari', state:'Uttarakhand', ingredients:['Gahat','Garlic','Salt'] },
  { name:'Mandua Roti', price:89, img:'Images/mauda-roti.png', desc:'Ragi roti.', type:'Veg', tribe:'Tharu', state:'Uttarakhand', ingredients:['Mandua flour','Salt','Water'] }
];

// -----------------------------
// App state & DOM refs
// -----------------------------
const stateTabsEl = document.getElementById('stateTabs');
const mainSearch = document.getElementById('mainSearch');
const heroSearchBtn = document.getElementById('heroSearchBtn');

const bestProductsEl = document.getElementById('bestProducts');
const menuGrid = document.getElementById('menuGrid');
const popularGrid = document.getElementById('popularGrid');

// Optional filter elements (only if they exist)
const stateFilter = document.getElementById('stateFilter');
const tribeFilter = document.getElementById('tribeFilter');
const typeFilter = document.getElementById('typeFilter');
const applyFiltersBtn = document.getElementById('applyFilters');
const resetFiltersBtn = document.getElementById('resetFilters');

const loadMoreBtn = document.getElementById('loadMore');
const sortSelect = document.getElementById('sortSelect');

const previewModal = document.getElementById('previewModal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalPrice = document.getElementById('modalPrice');
const modalIngredients = document.getElementById('modalIngredients');
const modalTribe = document.getElementById('modalTribe');
const addToCartBtn = document.getElementById('addToCart');
const cartBtn = document.getElementById('cartBtn');
const cartCountEl = document.getElementById('cartCount');

let items = ITEMS.slice(); // working copy
let filtered = items.slice();
let visible = 12;
let cart = [];

// -----------------------------
// Utilities
// Lazy loading setup
function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  } else {
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}
// Debounce function for performance
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
// Utilities
// -----------------------------
function formatPrice(p){ return typeof p === 'number' ? '₹' + p : (p || '₹0'); }
function fallbackImg(e){ e.target.src = 'https://via.placeholder.com/480x320?text=Image' }

// -----------------------------
// Build UI: categories (states) & filter options
// -----------------------------
// Build category tabs (based on food types)
function buildStateTabs(){
  const states = [...new Set(items.map(i=>i.state))];
  stateTabsEl.innerHTML = `<div class="hero-cat active" data-state="all">All</div>`;
  const allBtn = stateTabsEl.querySelector('[data-state="all"]');
  allBtn.addEventListener('click', ()=>{ stateTabsEl.querySelectorAll('.hero-cat').forEach(x=>x.classList.remove('active')); allBtn.classList.add('active'); filterByState('all'); });
  
  states.forEach(s=>{
    const el = document.createElement('div'); el.className='hero-cat'; el.textContent = s; el.dataset.state = s;
    stateTabsEl.appendChild(el);
    el.addEventListener('click', ()=>{ stateTabsEl.querySelectorAll('.hero-cat').forEach(x=>x.classList.remove('active')); el.classList.add('active'); filterByState(s); });
  });
  // populate filter selects
  stateFilter.innerHTML = '<option value="all">All States</option>' + states.map(s=>`<option value="${s}">${s}</option>`).join('');
  const tribes = [...new Set(items.map(i=>i.tribe))].sort();
  tribeFilter.innerHTML = '<option value="all">All Tribes</option>' + tribes.map(t=>`<option value="${t}">${t}</option>`).join('');
}

// -----------------------------
// Best products (top-rated simulated)
// Best products (top-rated simulated)
function renderBestProducts(){
  const best = items.slice().sort((a,b)=>b.price - a.price).slice(0,8);
  bestProductsEl.innerHTML = '';
  best.forEach(it=>{
    const c = document.createElement('div'); c.className='card';
    c.innerHTML = `
      <div class="thumb"><img src="${it.img}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/480x320?text=Image'"></div>
      <div class="card-content">
        <div class="title">${it.name}</div>
        <div class="meta">
          <span class="state">${it.state}</span>
          <span class="type">${it.type}</span>
        </div>
        <p class="desc">${it.desc}</p>
        <div class="bottom">
          <span class="price">${formatPrice(it.price)}</span>
          <button class="btn preview" data-name="${it.name}">View</button>
        </div>
      </div>
    `;
    c.querySelector('.preview').addEventListener('click', ()=>openPreview(it));
    bestProductsEl.appendChild(c);
  });
}

// Popular items (random pick)
function renderPopular(){
  const sample = items.slice().sort(()=>0.5 - Math.random()).slice(0,8);
  popularGrid.innerHTML = '';
  sample.forEach(it=>{
    const c = document.createElement('div'); c.className='card';
    c.innerHTML = `
      <div class="thumb"><img src="${it.img}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/480x320?text=Image'"></div>
      <div class="card-content">
        <div class="title">${it.name}</div>
        <div class="meta">
          <span class="state">${it.state}</span>
          <span class="type">${it.type}</span>
        </div>
        <p class="desc">${it.desc}</p>
        <div class="bottom">
          <span class="price">${formatPrice(it.price)}</span>
          <button class="btn preview" data-name="${it.name}">View</button>
        </div>
      </div>
    `;
    c.querySelector('.preview').addEventListener('click', ()=>openPreview(it));
    popularGrid.appendChild(c);
  });
}

// -----------------------------
// Render grid (with pagination)
function renderGrid(list){
  menuGrid.innerHTML = '';
  const toShow = list.slice(0, visible);
  if(!toShow.length) {
    menuGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #999; font-size: 1.2em;">🔍 <br><strong style=\"color:#333\">No items found</strong><br><p style=\"font-size:0.9em;margin-top:10px\">Try adjusting your search or filters</p></div>';
  } else {
    toShow.forEach(it=>{
      const c = document.createElement('div'); c.className='card';
      c.innerHTML = `
        <div class="thumb"><img src="${it.img}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/480x320?text=Image'"></div>
        <div class="card-content">
          <div class="title">${it.name}</div>
          <div class="meta">
            <span class="state">${it.state}</span>
            <span class="type">${it.type}</span>
          </div>
          <p class="desc">${it.desc}</p>
          <div class="bottom">
            <span class="price">${formatPrice(it.price)}</span>
            <div class="actions">
              <button class="btn preview" data-name="${it.name}">View</button>
              <button class="btn add" data-name="${it.name}">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
      c.querySelector('.preview').addEventListener('click', ()=>openPreview(it));
      c.querySelector('.add').addEventListener('click', ()=>{ addToCart(it); });
      menuGrid.appendChild(c);
    });
  }
  loadMoreBtn.style.display = list.length > visible ? 'inline-block' : 'none';
}

// Popular items (random pick)
function renderPopular(){
  const sample = items.slice().sort(()=>0.5 - Math.random()).slice(0,8);
  popularGrid.innerHTML = '';
  sample.forEach(it=>{
    const c = document.createElement('div'); c.className='card';
    c.innerHTML = `
      <div class="thumb"><img src="${it.img}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/480x320?text=Image'"></div>
      <div class="card-content">
        <div class="title">${it.name}</div>
        <div class="meta">
          <span class="state">${it.state}</span>
          <span class="type">${it.type}</span>
        </div>
        <p class="desc">${it.desc}</p>
        <div class="bottom">
          <span class="price">${formatPrice(it.price)}</span>
          <button class="btn preview" data-name="${it.name}">View</button>
        </div>
      </div>
    `;
    c.querySelector('.preview').addEventListener('click', ()=>openPreview(it));
    popularGrid.appendChild(c);
  });
}

// Best products (top-rated simulated)
function renderBestProducts(){
  const best = items.slice().sort((a,b)=>b.price - a.price).slice(0,8);
  bestProductsEl.innerHTML = '';
  best.forEach(it=>{
    const c = document.createElement('div'); c.className='card';
    c.innerHTML = `
      <div class="thumb"><img src="${it.img}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/480x320?text=Image'"></div>
      <div class="card-content">
        <div class="title">${it.name}</div>
        <div class="meta">
          <span class="state">${it.state}</span>
          <span class="type">${it.type}</span>
        </div>
        <p class="desc">${it.desc}</p>
        <div class="bottom">
          <span class="price">${formatPrice(it.price)}</span>
          <button class="btn preview" data-name="${it.name}">View</button>
        </div>
      </div>
    `;
    c.querySelector('.preview').addEventListener('click', ()=>openPreview(it));
    bestProductsEl.appendChild(c);
  });
}

// -----------------------------
// Filtering logic
function applyFilters(){
  const q = (mainSearch.value || '').trim().toLowerCase();
  const s = (stateFilter.value || 'all');
  const t = (tribeFilter.value || 'all');
  const type = (typeFilter.value || 'all');
  filtered = items.filter(it=>{
    const matchQ = !q || it.name.toLowerCase().includes(q) || it.state.toLowerCase().includes(q) || (it.tribe||'').toLowerCase().includes(q);
    const matchS = s === 'all' || it.state === s;
    const matchT = t === 'all' || it.tribe === t;
    const matchType = type === 'all' || it.type === type;
    return matchQ && matchS && matchT && matchType;
  });
  sortAndRender();
}

// Filter by state (from hero tabs)
function filterByState(state){
  if(state === 'all'){
    filtered = items.slice();
  } else {
    filtered = items.filter(it => it.state === state);
  }
  visible = 12;
  sortAndRender();
}

// -----------------------------
// sort and render
const debouncedSortAndRender = debounce(sortAndRender, 300);
function sortAndRender(){
  const sort = sortSelect.value;
  let list = filtered.slice();
  if(sort === 'price-asc') list.sort((a,b)=>a.price - b.price);
  else if(sort === 'price-desc') list.sort((a,b)=>b.price - a.price);
  else if(sort === 'alpha') list.sort((a,b)=>a.name.localeCompare(b.name));
  else list = list; // featured default
  renderGrid(list);
  setupLazyLoading(); // Re-setup lazy loading after rendering
}

// -----------------------------
// simple preview modal
let current = null;
function openPreview(it){
  current = it;
  modalImg.src = it.img || '';
  modalTitle.textContent = it.name;
  modalMeta.innerHTML = `<span>${it.state}</span><span>${it.type}</span><span>${it.tribe}</span>`;
  const priceEl = document.getElementById('modalPrice');
  if (priceEl) {
    priceEl.innerHTML = `<div class="modal-price">${formatPrice(it.price)}</div>`;
  }
  modalIngredients.innerHTML = '';
  (it.ingredients || []).forEach(ing => {
    const li = document.createElement('li'); li.textContent = ing; modalIngredients.appendChild(li);
  });
  modalTribe.textContent = it.tribe || '';
  previewModal.classList.add('show');
  previewModal.setAttribute('aria-hidden','false');
}
function closePreview(){ previewModal.classList.remove('show'); previewModal.setAttribute('aria-hidden','true'); current = null; }
modalClose.addEventListener('click', closePreview);
document.getElementById('close2').addEventListener('click', closePreview);
previewModal.addEventListener('click', e => { if(e.target === previewModal) closePreview(); });

// -----------------------------
// cart
function addToCart(it){
  const found = cart.find(c=>c.name === it.name);
  if(found) found.qty++;
  else cart.push({...it, qty:1});
  cartCountEl.textContent = cart.reduce((s,i)=>s+i.qty,0);
  flash(`${it.name} added to cart`);
}
cartBtn.addEventListener('click', ()=>{ 
  document.getElementById('cartPanel').classList.add('show');
  renderCart();
});

// Cart panel functions
function closeCart() {
  document.getElementById('cartPanel').classList.remove('show');
}

function clearCart() {
  cart = [];
  cartCountEl.textContent = '0';
  renderCart();
  flash('Cart cleared');
}

function renderCart() {
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  cartItemsEl.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p style="text-align:center;color:#777;padding:20px;">Your cart is empty</p>';
    cartTotalEl.textContent = '0';
    return;
  }
  
  let total = 0;
  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <img src="${item.img || 'https://via.placeholder.com/70'}" alt="${item.name}">
      <div>
        <div>${item.name}</div>
        <div>${item.state} • ${item.type}</div>
        <div>₹${item.price} x ${item.qty} = ₹${itemTotal}</div>
      </div>
      <button class="remove" onclick="removeFromCart(${idx})">Remove</button>
    `;
    cartItemsEl.appendChild(cartItem);
  });
  
  cartTotalEl.textContent = total;
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  cartCountEl.textContent = cart.reduce((s,i)=>s+i.qty,0);
  renderCart();
  flash('Item removed from cart');
}

// -----------------------------
// helpers
function flash(msg){
  const el = document.createElement('div'); el.textContent = msg;
  el.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);bottom:26px;background:#111;color:#fff;padding:10px 14px;border-radius:10px;z-index:9999;opacity:0;transition:opacity .12s';
  document.body.appendChild(el);
  requestAnimationFrame(()=>el.style.opacity = 1);
  setTimeout(()=>{ el.style.opacity=0; setTimeout(()=>el.remove(),220); },1300);
}

// -----------------------------
// Menu param helpers
// detect likely "drink" items by name/description keywords
function isDrink(item){
  if(!item) return false;
  const text = ((item.name||'') + ' ' + (item.desc||'')).toLowerCase();
  return /drink|beverage|handia|axone|tea|juice|wine|beer|fermented|ferment/.test(text);
}

function applyMenuParam(menu){
  if(!menu) return;
  menu = menu.toLowerCase();
  visible = 12;
  const setAllActive = ()=>{
    const allBtn = stateTabsEl && stateTabsEl.querySelector('[data-state="all"]');
    if(allBtn){ stateTabsEl.querySelectorAll('.hero-cat').forEach(x=>x.classList.remove('active')); allBtn.classList.add('active'); }
  };

  if(menu === 'main'){
    filtered = items.slice();
    setAllActive();
    sortAndRender();
  } else if(menu === 'drinks'){
    filtered = items.filter(isDrink);
    setAllActive();
    sortAndRender();
  } else if(menu === 'lunch'){
    // lunch: show non-drink items (heuristic)
    filtered = items.filter(it => !isDrink(it));
    setAllActive();
    sortAndRender();
  } else if(menu === 'takeout'){
    // takeout: heuristic - show affordable items (price <= 200)
    filtered = items.filter(it => typeof it.price === 'number' ? it.price <= 200 : true);
    setAllActive();
    sortAndRender();
  }
}

// -----------------------------
// load more
loadMoreBtn.addEventListener('click', ()=>{ visible += 12; sortAndRender(); });

// -----------------------------
// event listeners
heroSearchBtn.addEventListener('click', applyFilters);
mainSearch.addEventListener('keypress', e=>{ if(e.key==='Enter') applyFilters(); });
if(applyFiltersBtn) applyFiltersBtn.addEventListener('click', ()=>{ visible = 12; applyFilters(); });
if(resetFiltersBtn) resetFiltersBtn.addEventListener('click', ()=>{
  if(stateFilter.value !== undefined) stateFilter.value='all'; 
  if(tribeFilter.value !== undefined) tribeFilter.value='all'; 
  if(typeFilter.value !== undefined) typeFilter.value='all'; 
  mainSearch.value=''; visible=12; filtered = items.slice(); sortAndRender();
});

// on sort change
if(sortSelect.addEventListener) sortSelect.addEventListener('change', ()=> sortAndRender());

// -----------------------------
// Mobile Menu (Hamburger) Logic
function setupHamburgerMenu() {
    const hamburgerBtnEl = document.getElementById('hamburgerBtn');
    const mainNavEl = document.getElementById('mainNav');
    
    if (hamburgerBtnEl && mainNavEl) {
        hamburgerBtnEl.addEventListener('click', () => {
            mainNavEl.classList.toggle('mobile-menu-open');
            // Change icon to 'X' when open
            if (mainNavEl.classList.contains('mobile-menu-open')) {
                hamburgerBtnEl.textContent = '✕';
            } else {
                hamburgerBtnEl.textContent = '☰';
            }
        });

        // Close menu when a link is clicked
        mainNavEl.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNavEl.classList.contains('mobile-menu-open')) {
                    mainNavEl.classList.remove('mobile-menu-open');
                    hamburgerBtnEl.textContent = '☰';
                }
            });
        });
    }
}

// -----------------------------
// init
document.addEventListener('DOMContentLoaded', ()=>{
  // items already provided above
  buildStateTabs();
  filtered = items.slice();
  renderGrid(filtered);
  document.getElementById('year').textContent = new Date().getFullYear();
  setupHamburgerMenu();
  setupLazyLoading(); // Initialize lazy loading
  // Apply menu filter if opened from home hero buttons (e.g. ?menu=drinks)
  try{
    const params = new URLSearchParams(window.location.search);
    const menuParam = params.get('menu');
    if(menuParam) applyMenuParam(menuParam);
  }catch(e){ /* ignore */ }
});

