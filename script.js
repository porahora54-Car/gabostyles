const WHATSAPP_NUMBER = '584123028058';

const BRANDS = [
  { name: 'Stivaleli', logo: 'assets/brands/stivaleli.svg' },
  { name: 'Mango', logo: 'assets/brands/mango.svg' },
  { name: "Levi's", logo: 'assets/brands/levis.svg' },
  { name: 'Calle 8', logo: 'assets/brands/calle-8.svg' }
];

const SIZES_BY_TYPE = {
  pantalon: ['28', '30', '32', '34', '36'],
  franela: ['XS', 'S', 'M', 'L', 'XL'],
  camisa: ['XS', 'S', 'M', 'L', 'XL'],
  gorra: ['Talla Única / Ajustable'],
  correa: ['Talla Única / Ajustable']
};

const PRODUCTS = [
  {
    id: 'p-cargo-01',
    name: 'Pantalón Cargo Estructurado',
    category: 'Hombres',
    type: 'pantalon',
    promo: true,
    price: 42,
    originalPrice: 56,
    discount: '-25%',
    description: 'Corte recto moderno con bolsillos laterales reforzados y algodón de alta densidad.',
    colors: [
      { name: 'Carbón', hex: '#0F172A', stageBg: '#FDE68A' },
      { name: 'Naranja', hex: '#F97316', stageBg: '#FFFFFF' },
      { name: 'Amarillo suave', hex: '#FDE68A', stageBg: '#FDE68A' }
    ]
  },
  {
    id: 'f-heavy-02',
    name: 'Franela Heavyweight Boxy',
    category: 'Hombres',
    type: 'franela',
    promo: true,
    price: 24,
    originalPrice: 30,
    discount: '-20%',
    description: 'Algodón peinado de 260 GSM con caída estructurada y cuello ribeteado.',
    colors: [
      { name: 'Carbón', hex: '#0F172A', stageBg: '#FFFFFF' },
      { name: 'Carbón suave', hex: '#0F172A', stageBg: '#FDE68A' },
      { name: 'Blanco', hex: '#FFFFFF', stageBg: '#FDE68A' }
    ]
  },
  {
    id: 'c-lino-03',
    name: 'Camisa Manga Corta Texturizada',
    category: 'Hombres',
    type: 'camisa',
    promo: false,
    price: 34,
    originalPrice: null,
    discount: null,
    description: 'Tejido respirable de tacto suave ideal para climas cálidos y looks casuales.',
    colors: [
      { name: 'Naranja', hex: '#F97316', stageBg: '#FDE68A' },
      { name: 'Carbón', hex: '#0F172A', stageBg: '#FFFFFF' },
      { name: 'Noche', hex: '#0F172A', stageBg: '#FDE68A' }
    ]
  },
  {
    id: 'p-wide-04',
    name: 'Pantalón Palazzo Denim',
    category: 'Mujeres',
    type: 'pantalon',
    promo: true,
    price: 46,
    originalPrice: 68,
    discount: '-32%',
    description: 'Tiro alto favorecedor con pierna amplia y caída fluida en denim flexible.',
    colors: [
      { name: 'Carbón', hex: '#0F172A', stageBg: '#FDE68A' },
      { name: 'Amarillo suave', hex: '#FDE68A', stageBg: '#FFFFFF' },
      { name: 'Naranja', hex: '#F97316', stageBg: '#FDE68A' }
    ]
  },
  {
    id: 'f-crop-05',
    name: 'Franela Fitted Ribbed',
    category: 'Mujeres',
    type: 'franela',
    promo: false,
    price: 22,
    originalPrice: null,
    discount: null,
    description: 'Ajuste limpio al cuerpo con acabado elástico de excelente recuperación.',
    colors: [
      { name: 'Amarillo suave', hex: '#FDE68A', stageBg: '#FDE68A' },
      { name: 'Carbón', hex: '#0F172A', stageBg: '#FFFFFF' },
      { name: 'Grafito', hex: '#0F172A', stageBg: '#FDE68A' }
    ]
  },
  {
    id: 'c-oversize-06',
    name: 'Camisa Poplin Contemporánea',
    category: 'Mujeres',
    type: 'camisa',
    promo: false,
    price: 36,
    originalPrice: null,
    discount: null,
    description: 'Botones nacarados y corte versátil para llevar suelta o fajada.',
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', stageBg: '#FDE68A' },
      { name: 'Carbón', hex: '#0F172A', stageBg: '#FDE68A' },
      { name: 'Naranja', hex: '#F97316', stageBg: '#FFFFFF' }
    ]
  },
  {
    id: 'g-dad-07',
    name: 'Gorra 6 Paneles Bordada',
    category: 'Accesorios',
    type: 'gorra',
    promo: true,
    price: 18,
    originalPrice: 25,
    discount: '-28%',
    description: 'Visera curva con broche metálico trasero ajustable y bordado frontal.',
    colors: [
      { name: 'Carbón', hex: '#0F172A', stageBg: '#FFFFFF' },
      { name: 'Negro mate', hex: '#0F172A', stageBg: '#FDE68A' },
      { name: 'Naranja', hex: '#F97316', stageBg: '#FDE68A' }
    ]
  },
  {
    id: 'a-belt-08',
    name: 'Correa Hebilla Geométrica',
    category: 'Accesorios',
    type: 'correa',
    promo: false,
    price: 21,
    originalPrice: null,
    discount: null,
    description: 'Diseño ajustable con hebilla metálica cepillada para pantalón o vestido.',
    colors: [
      { name: 'Obsidiana', hex: '#0F172A', stageBg: '#FDE68A' },
      { name: 'Naranja', hex: '#F97316', stageBg: '#FFFFFF' },
      { name: 'Carbón', hex: '#0F172A', stageBg: '#FDE68A' }
    ]
  }
];

const SAMPLE_IMAGE_INDEXES = {
  Hombres: [0, 3, 4, 5, 6, 7, 10, 16, 20, 21, 22, 23, 24, 25, 26],
  Mujeres: [8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 25, 26, 8, 11, 15],
  Accesorios: [1, 2, 20, 21, 23, 24, 25, 0, 3, 4, 8, 9, 11, 18, 26]
};

const SAMPLE_PRODUCT_NAMES = {
  Hombres: [
    'Franela Básica Oversize',
    'Jeans Rectos Clásicos',
    'Pantalón Chino Slim',
    'Camisa Oxford Casual',
    'Franela Estampada Urbana',
    'Chaqueta Denim Essential',
    'Pantalón Jogger',
    'Camisa Manga Larga Casual',
    'Short Cargo',
    'Suéter de Punto',
    'Jean Relaxed Fit',
    'Chaqueta Ligera'
  ],
  Mujeres: [
    'Blusa Texturizada',
    'Jean Wide Leg',
    'Pantalón Sastrero',
    'Camisa Oversize',
    'Franela Crop Básica',
    'Vestido Casual Midi',
    'Chaqueta Denim',
    'Top Ribbed',
    'Pantalón Cargo',
    'Camisa de Lino',
    'Suéter Ligero',
    'Jean Recto High Rise'
  ],
  Accesorios: [
    'Gorra Clásica Bordada',
    'Correa Casual Ajustable',
    'Bolso Shopper Calle 8',
    'Gorra Urbana Classic',
    'Cinturón Hebilla Rectangular',
    'Bolso Tote Diario',
    'Gorra 6 Paneles',
    'Correa Doble Costura',
    'Bolso Mini Casual',
    'Gorra Logo Bordado',
    'Correa Cuero Sintético',
    'Bolso de Hombro',
    'Accesorio Essential'
  ]
};

function getSampleImage(category, index) {
  const imageIndex = SAMPLE_IMAGE_INDEXES[category][index % SAMPLE_IMAGE_INDEXES[category].length];
  return imageIndex === 0 ? 'assets/images.jpg' : `assets/images (${imageIndex}).jpg`;
}

const existingProductCounts = {};
PRODUCTS.forEach((product) => {
  const categoryIndex = existingProductCounts[product.category] || 0;
  product.image = getSampleImage(product.category, categoryIndex);
  existingProductCounts[product.category] = categoryIndex + 1;
});

Object.entries(SAMPLE_PRODUCT_NAMES).forEach(([category, names]) => {
  const templates = PRODUCTS.filter((product) => product.category === category);

  names.forEach((name, index) => {
    const categoryIndex = PRODUCTS.filter((product) => product.category === category).length;
    const template = templates[index % templates.length];
    const price = template.price + (categoryIndex % 4) * 2;
    const promo = categoryIndex % 6 === 0;

    PRODUCTS.push({
      ...template,
      id: `sample-${category.toLowerCase()}-${index + 1}`,
      name,
      price,
      originalPrice: promo ? Number((price / 0.8).toFixed(2)) : null,
      discount: promo ? '-20%' : null,
      promo,
      description: 'Producto de muestra. Foto y detalles pendientes de actualizar.',
      image: getSampleImage(category, categoryIndex)
    });
  });
});

const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Carlos Mendoza',
    rating: 5,
    comment: 'El pantalón cargo tiene un corte impecable y el envío fue rapidísimo. Volveré a pedir.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Sofía Castellanos',
    rating: 5,
    comment: 'La tela de la camisa y las franelas se siente súper firme y cómoda. Muy buena atención por WhatsApp.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Daniela Briceño',
    rating: 4,
    comment: 'La gorra y el palazzo calzan excelente. Me encantó poder ver los colores antes de comprar.',
    verified: true
  }
];

const LEGAL_DOCS = {
  privacy: {
    title: 'Política de Privacidad — Gabo Styles',
    html: `
      <h3>1. Responsable del Tratamiento</h3>
      <p>Gabo Styles recopila únicamente la información que tú decides proporcionar voluntariamente al publicar una reseña o generar un pedido para coordinar su despacho vía WhatsApp.</p>
      <h3>2. Finalidad de los Datos</h3>
      <p>Tu nombre, teléfono y detalles de compra se emplean exclusivamente para preparar tu pedido, confirmar el método de pago seleccionado (Zelle, Pago Móvil o Binance) y brindar soporte al cliente.</p>
      <h3>3. Conservación y Derechos</h3>
      <p>No vendemos ni cedemos tus datos a terceros no autorizados. Puedes solicitar la actualización o eliminación de tus datos en cualquier momento escribiendo a nuestro canal oficial de WhatsApp (+58 412 302 8058).</p>
    `
  },
  terms: {
    title: 'Términos y Condiciones — Gabo Styles',
    html: `
      <h3>1. Disponibilidad y Tallas</h3>
      <p>Todas las prendas están sujetas a disponibilidad de inventario al momento de confirmar el pago. Verifica cuidadosamente tu talla según el tipo de prenda (numérica en pantalones, alfabética en franelas/camisas o talla única ajustable en accesorios).</p>
      <h3>2. Pagos y Confirmación</h3>
      <p>Aceptamos ZELLE, PAGO MÓVIL y BINANCE. El pedido entra en preparación una vez verificado el comprobante correspondiente en el chat de WhatsApp.</p>
      <h3>3. Cambios y Envíos</h3>
      <p>Los envíos se coordinan según la modalidad activa indicada en la tienda. Los cambios por talla aplican dentro de los plazos acordados siempre que la prenda conserve etiquetas y sin uso.</p>
    `
  },
  cookies: {
    title: 'Política de Cookies — Gabo Styles',
    html: `
      <h3>1. ¿Qué son las Cookies y el Almacenamiento Local?</h3>
      <p>Gabo Styles utiliza tecnologías de almacenamiento en el navegador (como localStorage) para mantener tu carrito, recordar tus preferencias de privacidad y optimizar la navegación.</p>
      <h3>2. Categorías</h3>
      <p><strong>Esenciales:</strong> Indispensables para el carrito y la validación de formularios. <strong>Preferencias y Analítica:</strong> Opcionales y controladas desde el panel de Estado de Privacidad y Consentimiento.</p>
    `
  }
};

// Estado de la aplicación
const state = {
  selectedColors: {},
  selectedSizes: {},
  cart: [],
  reviews: [...INITIAL_REVIEWS],
  consent: null
};

// Inicializar selecciones por defecto de color y talla
PRODUCTS.forEach((product) => {
  state.selectedColors[product.id] = 0;
  state.selectedSizes[product.id] = SIZES_BY_TYPE[product.type][0];
});

// Persistencia en localStorage
function loadPersistedState() {
  try {
    const savedConsent = localStorage.getItem('gabo_styles_consent_v1');
    if (savedConsent) {
      state.consent = JSON.parse(savedConsent);
    }
    const savedCart = localStorage.getItem('gabo_styles_cart_v1');
    if (savedCart) {
      state.cart = JSON.parse(savedCart);
    }
    const savedReviews = localStorage.getItem('gabo_styles_reviews_v1');
    if (savedReviews) {
      const parsed = JSON.parse(savedReviews);
      if (Array.isArray(parsed) && parsed.length) {
        state.reviews = parsed;
      }
    }
  } catch {
    // Ignorar errores de acceso a almacenamiento
  }
}

function saveCart() {
  try {
    localStorage.setItem('gabo_styles_cart_v1', JSON.stringify(state.cart));
  } catch {
    // Ignorar
  }
}

function saveReviews() {
  try {
    localStorage.setItem('gabo_styles_reviews_v1', JSON.stringify(state.reviews));
  } catch {
    // Ignorar
  }
}

function saveConsent(preferences, actionLabel) {
  const record = {
    essential: true,
    preferences: Boolean(preferences.preferences),
    analytics: Boolean(preferences.analytics),
    action: actionLabel,
    timestamp: new Date().toISOString()
  };
  state.consent = record;
  try {
    localStorage.setItem('gabo_styles_consent_v1', JSON.stringify(record));
  } catch {
    // Ignorar
  }
  updateConsentUI();
}

function revokeConsent() {
  state.consent = null;
  try {
    localStorage.removeItem('gabo_styles_consent_v1');
  } catch {
    // Ignorar
  }
  updateConsentUI();
}

function updateConsentUI() {
  const banner = document.getElementById('cookie-banner');
  const summaryEl = document.getElementById('consent-status-summary');
  const auditBox = document.getElementById('consent-audit-box');
  const prefToggle = document.getElementById('pref-cookies-toggle');
  const analyticsToggle = document.getElementById('analytics-cookies-toggle');

  if (!state.consent) {
    banner.classList.add('is-open');
    banner.setAttribute('aria-hidden', 'false');
    summaryEl.textContent = 'Estado actual: Sin consentimiento guardado';
    if (prefToggle) prefToggle.checked = false;
    if (analyticsToggle) analyticsToggle.checked = false;
    if (auditBox) {
      auditBox.innerHTML = '<strong>Auditoría:</strong> No existe un registro activo de consentimiento de cookies en este navegador.';
    }
    return;
  }

  banner.classList.remove('is-open');
  banner.setAttribute('aria-hidden', 'true');

  const { preferences, analytics, action, timestamp } = state.consent;
  const formattedDate = new Date(timestamp).toLocaleString('es-VE');
  summaryEl.textContent = `Estado actual: ${action} (Pref: ${preferences ? 'Sí' : 'No'} | Analítica: ${analytics ? 'Sí' : 'No'})`;

  if (prefToggle) prefToggle.checked = preferences;
  if (analyticsToggle) analyticsToggle.checked = analytics;
  if (auditBox) {
    auditBox.innerHTML = `
      <div><strong>Consentimiento registrado:</strong> ${action}</div>
      <div><strong>Cookies esenciales:</strong> Activas</div>
      <div><strong>Preferencias:</strong> ${preferences ? 'Permitidas' : 'Denegadas'}</div>
      <div><strong>Analítica:</strong> ${analytics ? 'Permitida' : 'Denegada'}</div>
      <div><strong>Marca de tiempo:</strong> ${formattedDate}</div>
    `;
  }
}

function renderProductCard(product) {
  const colorIndex = state.selectedColors[product.id] ?? 0;
  const activeColor = product.colors[colorIndex] || product.colors[0];
  const sizes = SIZES_BY_TYPE[product.type];
  const activeSize = state.selectedSizes[product.id] || sizes[0];

  const swatchesHtml = product.colors
    .map(
      (c, idx) => `
      <button
        type="button"
        class="swatch-btn ${idx === colorIndex ? 'active' : ''}"
        style="background-color: ${c.hex};"
        title="${c.name}"
        aria-label="Seleccionar color ${c.name} para ${product.name}"
        data-product-id="${product.id}"
        data-color-index="${idx}"
      ></button>
    `
    )
    .join('');

  const sizesHtml = sizes
    .map(
      (sz) => `
      <button
        type="button"
        class="size-chip ${sz === activeSize ? 'selected' : ''}"
        data-product-id="${product.id}"
        data-size="${sz}"
      >${sz}</button>
    `
    )
    .join('');

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-media-wrap">
        ${product.promo && product.discount ? `<span class="discount-badge">${product.discount}</span>` : ''}
        <div class="product-stage" id="stage-${product.id}" style="background-color: ${activeColor.stageBg};">
          <img class="product-image" src="${product.image}" alt="${product.name} — foto de muestra" loading="lazy" decoding="async" />
        </div>
        <div class="swatches-bar" role="group" aria-label="Colores de ${product.name}">
          ${swatchesHtml}
        </div>
      </div>

      <div class="product-body">
        <div class="product-meta-top">
          <span>${product.category}</span>
          <span id="color-label-${product.id}">${activeColor.name}</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>

        <div class="price-row">
          <span class="price-current">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>

        <div class="sizes-block">
          <span class="sizes-label">Talla seleccionada: <strong id="size-label-${product.id}">${activeSize}</strong></span>
          <div class="sizes-pills" role="group" aria-label="Tallas disponibles para ${product.name}">
            ${sizesHtml}
          </div>
          <button type="button" class="btn-accent full-width add-to-cart-btn" data-product-id="${product.id}">
            Añadir al Carrito
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const promosGrid = document.getElementById('promos-grid');
  const hombresGrid = document.getElementById('grid-hombres');
  const mujeresGrid = document.getElementById('grid-mujeres');
  const accesoriosGrid = document.getElementById('grid-accesorios');

  const promoProducts = PRODUCTS.filter((p) => p.promo);
  promosGrid.innerHTML = promoProducts.map(renderProductCard).join('');

  hombresGrid.innerHTML = PRODUCTS.filter((p) => p.category === 'Hombres').map(renderProductCard).join('');
  mujeresGrid.innerHTML = PRODUCTS.filter((p) => p.category === 'Mujeres').map(renderProductCard).join('');
  accesoriosGrid.innerHTML = PRODUCTS.filter((p) => p.category === 'Accesorios').map(renderProductCard).join('');
}

function updateProductColorInDOM(productId, colorIndex) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  const colorObj = product.colors[colorIndex];
  if (!colorObj) return;

  state.selectedColors[productId] = colorIndex;

  document.querySelectorAll('.product-card').forEach((card) => {
    if (card.dataset.productId !== productId) return;

    const stage = card.querySelector(`#stage-${productId}`);
    const colorLabel = card.querySelector(`#color-label-${productId}`);

    if (stage) {
      stage.classList.add('is-switching');
      setTimeout(() => {
        stage.style.backgroundColor = colorObj.stageBg;
        stage.classList.remove('is-switching');
      }, 130);
    }

    if (colorLabel) {
      colorLabel.textContent = colorObj.name;
    }

    card.querySelectorAll('.swatch-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === colorIndex);
    });
  });
}

function updateProductSizeInDOM(productId, size) {
  state.selectedSizes[productId] = size;
  document.querySelectorAll('.product-card').forEach((card) => {
    if (card.dataset.productId !== productId) return;

    const sizeLabel = card.querySelector(`#size-label-${productId}`);
    if (sizeLabel) sizeLabel.textContent = size;

    card.querySelectorAll('.size-chip').forEach((chip) => {
      chip.classList.toggle('selected', chip.dataset.size === size);
    });
  });
}

// Carrusel infinito de marcas
function renderBrandsMarquee() {
  const track = document.getElementById('brands-track');
  const items = [...BRANDS, ...BRANDS];
  track.innerHTML = items
    .map((brand, index) => {
      const isDuplicate = index >= BRANDS.length;
      return `
      <div class="brand-pill"${isDuplicate ? ' aria-hidden="true"' : ''}>
        <img src="${brand.logo}" alt="${isDuplicate ? '' : `${brand.name} — logo`}" loading="lazy" />
      </div>
    `;
    })
    .join('');
}

// Filtrado por Tabs del Catálogo
function initCatalogTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const groups = document.querySelectorAll('.category-group');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;

      tabs.forEach((t) => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', String(isActive));
      });

      groups.forEach((group) => {
        const category = group.dataset.category;
        const shouldShow = filter === 'Todos' || filter === category;
        group.classList.toggle('is-hidden', !shouldShow);
      });
    });
  });
}

// Carrito y Checkout
function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const colorObj = product.colors[state.selectedColors[productId] ?? 0];
  const size = state.selectedSizes[productId] || SIZES_BY_TYPE[product.type][0];
  const key = `${product.id}__${colorObj.name}__${size}`;

  const existing = state.cart.find((item) => item.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      key,
      id: product.id,
      name: product.name,
      type: product.type,
      color: colorObj.name,
      size,
      price: product.price,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  openCartDrawer();
}

function changeCartQty(key, delta) {
  const idx = state.cart.findIndex((item) => item.key === key);
  if (idx === -1) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  saveCart();
  renderCart();
}

function removeCartItem(key) {
  state.cart = state.cart.filter((item) => item.key !== key);
  saveCart();
  renderCart();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function renderCart() {
  const itemsContainer = document.getElementById('cart-items');
  const badge = document.getElementById('cart-count');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');

  const totalUnits = state.cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  badge.textContent = String(totalUnits);
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  totalEl.textContent = `$${subtotal.toFixed(2)}`;

  if (!state.cart.length) {
    itemsContainer.innerHTML = `<p class="cart-empty">Tu carrito está vacío. Agrega prendas desde el catálogo o promociones.</p>`;
    return;
  }

  itemsContainer.innerHTML = state.cart
    .map(
      (item) => `
      <div class="cart-item">
        <div>
          <div class="cart-item-title">${escapeHtml(item.name)}</div>
          <div class="cart-item-meta">Tipo: ${escapeHtml(item.type)} • Color: ${escapeHtml(item.color)} • Talla: ${escapeHtml(item.size)}</div>
          <div class="cart-item-controls">
            <button type="button" class="qty-btn" data-qty-key="${escapeHtml(item.key)}" data-delta="-1" aria-label="Disminuir cantidad">-</button>
            <span>${item.qty}</span>
            <button type="button" class="qty-btn" data-qty-key="${escapeHtml(item.key)}" data-delta="1" aria-label="Aumentar cantidad">+</button>
            <button type="button" class="remove-item-btn" data-remove-key="${escapeHtml(item.key)}">Eliminar</button>
          </div>
        </div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
    `
    )
    .join('');
}

function openCartDrawer() {
  document.getElementById('cart-backdrop').classList.add('is-open');
  document.getElementById('cart-drawer').classList.add('is-open');
  document.getElementById('cart-drawer').setAttribute('aria-hidden', 'false');
}

function closeCartDrawer() {
  document.getElementById('cart-backdrop').classList.remove('is-open');
  document.getElementById('cart-drawer').classList.remove('is-open');
  document.getElementById('cart-drawer').setAttribute('aria-hidden', 'true');
}

function initCheckoutForm() {
  const form = document.getElementById('checkout-form');
  const feedback = document.getElementById('checkout-feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.textContent = '';

    if (!state.cart.length) {
      feedback.textContent = 'Agrega al menos una prenda al carrito antes de confirmar.';
      return;
    }

    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;
    const consentChecked = document.getElementById('checkout-consent').checked;

    if (!name || !phone) {
      feedback.textContent = 'Por favor completa tu nombre y teléfono.';
      return;
    }

    if (!paymentMethod) {
      feedback.textContent = 'Selecciona un método de pago (ZELLE, PAGO MÓVIL o BINANCE).';
      return;
    }

    if (!consentChecked) {
      feedback.textContent = 'Debes aceptar la Política de Privacidad y los Términos y Condiciones.';
      return;
    }

    const orderNumber = `GS-${Date.now().toString().slice(-6)}`;
    const consentTimestamp = new Date().toLocaleString('es-VE');
    const total = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    const lines = state.cart.map(
      (item, idx) =>
        `${idx + 1}. ${item.name} | Tipo: ${item.type} | Color: ${item.color} | Talla: ${item.size} | Cant: ${item.qty} | Subtotal: $${(item.price * item.qty).toFixed(2)}`
    );

    const receiptText = [
      `*RECIBO DE PEDIDO — GABO STYLES*`,
      `Orden: *${orderNumber}*`,
      `Cliente: ${name}`,
      `Teléfono: ${phone}`,
      ``,
      `*Detalle de prendas:*`,
      ...lines,
      ``,
      `*Total a pagar:* $${total.toFixed(2)}`,
      `*Método de pago:* ${paymentMethod}`,
      `Consentimiento aceptado: ${consentTimestamp}`
    ].join('\n');

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(receiptText)}`;
    const receiptWindow = window.open(waUrl, '_blank');
    if (receiptWindow) {
      receiptWindow.opener = null;
      state.cart = [];
      saveCart();
      renderCart();
      form.reset();
      feedback.textContent = `Orden ${orderNumber} generada. Redirigiendo a WhatsApp...`;
      return;
    }

    feedback.replaceChildren(
      document.createTextNode(`Orden ${orderNumber} generada. El navegador bloqueó la ventana emergente. `)
    );
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Abrir WhatsApp';
    feedback.append(link);
  });
}

// Reseñas y formulario con consentimiento obligatorio
function renderReviews() {
  const list = document.getElementById('reviews-list');
  list.innerHTML = state.reviews
    .map((rev) => {
      const stars = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
      return `
        <article class="review-card">
          <div class="review-top">
            <span class="review-stars" aria-label="${rev.rating} de 5 estrellas">${stars}</span>
            <span class="review-verified">${rev.verified ? 'Compra / Opinión Registrada' : 'Cliente'}</span>
          </div>
          <p class="review-comment">"${escapeHtml(rev.comment)}"</p>
          <div class="review-author">${escapeHtml(rev.name)}</div>
        </article>
      `;
    })
    .join('');
}

function initReviewForm() {
  const form = document.getElementById('review-form');
  const feedback = document.getElementById('review-feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.textContent = '';

    const name = document.getElementById('review-name').value.trim();
    const rating = Number(document.getElementById('review-rating').value);
    const comment = document.getElementById('review-comment').value.trim();
    const consentChecked = document.getElementById('review-consent').checked;

    if (!name || !comment) {
      feedback.textContent = 'Completa tu nombre y tu comentario.';
      return;
    }

    if (!consentChecked) {
      feedback.textContent = 'Debes marcar la casilla de aceptación de políticas para publicar.';
      return;
    }

    const newReview = {
      id: `rev-${Date.now()}`,
      name,
      rating,
      comment,
      verified: true,
      consentTimestamp: new Date().toISOString()
    };

    state.reviews.unshift(newReview);
    saveReviews();
    renderReviews();
    form.reset();
    feedback.textContent = '¡Gracias! Tu reseña ha sido publicada.';
  });
}

// Modales legales y gestión de cookies
function openLegalModal(docKey) {
  const doc = LEGAL_DOCS[docKey] || LEGAL_DOCS.privacy;
  document.getElementById('legal-modal-title').textContent = doc.title;
  document.getElementById('legal-modal-body').innerHTML = doc.html;
  const modal = document.getElementById('legal-modal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeLegalModal() {
  const modal = document.getElementById('legal-modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

function openConsentModal() {
  updateConsentUI();
  const modal = document.getElementById('consent-modal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeConsentModal() {
  const modal = document.getElementById('consent-modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

function initModalsAndCookies() {
  document.addEventListener('click', (e) => {
    const legalTrigger = e.target.closest('[data-legal-modal]');
    if (legalTrigger) {
      openLegalModal(legalTrigger.dataset.legalModal);
    }
  });

  document.getElementById('legal-close-btn').addEventListener('click', closeLegalModal);
  document.getElementById('legal-accept-btn').addEventListener('click', closeLegalModal);
  document.getElementById('legal-modal').addEventListener('click', (e) => {
    if (e.target.id === 'legal-modal') closeLegalModal();
  });

  document.getElementById('cookie-accept-all').addEventListener('click', () => {
    saveConsent({ preferences: true, analytics: true }, 'Aceptar todas');
  });

  document.getElementById('cookie-reject-nonessential').addEventListener('click', () => {
    saveConsent({ preferences: false, analytics: false }, 'Rechazar no esenciales');
  });

  document.getElementById('cookie-open-settings').addEventListener('click', openConsentModal);
  document.getElementById('open-consent-manager-btn').addEventListener('click', openConsentModal);
  document.getElementById('consent-close-btn').addEventListener('click', closeConsentModal);
  document.getElementById('consent-modal').addEventListener('click', (e) => {
    if (e.target.id === 'consent-modal') closeConsentModal();
  });

  document.getElementById('save-consent-btn').addEventListener('click', () => {
    const preferences = document.getElementById('pref-cookies-toggle').checked;
    const analytics = document.getElementById('analytics-cookies-toggle').checked;
    saveConsent({ preferences, analytics }, 'Configuración personalizada');
    closeConsentModal();
  });

  document.getElementById('revoke-consent-btn').addEventListener('click', () => {
    revokeConsent();
  });
}

// Scroll dinámico: banner de Envíos Gratis visible solo en scrollY === 0
function initScrollBehavior() {
  const banner = document.getElementById('shipping-banner');

  const handleScroll = () => {
    const isTop = window.scrollY === 0;
    banner.classList.toggle('is-hidden', !isTop);
    document.body.classList.toggle('scrolled', !isTop);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// Menú hamburguesa móvil (< 768px)
function initMobileMenu() {
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open', !expanded);
    menu.setAttribute('aria-hidden', String(expanded));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
    });
  });
}

// Delegación de eventos en tarjetas y carrito
function initDelegatedEvents() {
  document.addEventListener('click', (e) => {
    const swatch = e.target.closest('.swatch-btn');
    if (swatch) {
      updateProductColorInDOM(swatch.dataset.productId, Number(swatch.dataset.colorIndex));
      return;
    }

    const sizeChip = e.target.closest('.size-chip');
    if (sizeChip) {
      updateProductSizeInDOM(sizeChip.dataset.productId, sizeChip.dataset.size);
      return;
    }

    const addBtn = e.target.closest('.add-to-cart-btn');
    if (addBtn) {
      addToCart(addBtn.dataset.productId);
      return;
    }

    const qtyBtn = e.target.closest('.qty-btn');
    if (qtyBtn) {
      changeCartQty(qtyBtn.dataset.qtyKey, Number(qtyBtn.dataset.delta));
      return;
    }

    const removeBtn = e.target.closest('.remove-item-btn');
    if (removeBtn) {
      removeCartItem(removeBtn.dataset.removeKey);
    }
  });

  document.getElementById('cart-open-btn').addEventListener('click', openCartDrawer);
  document.getElementById('cart-close-btn').addEventListener('click', closeCartDrawer);
  document.getElementById('cart-backdrop').addEventListener('click', closeCartDrawer);
}

function initHeroCarousel() {
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  if (slides.length < 2) return;

  let activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (activeIndex < 0) activeIndex = 0;

  window.setInterval(() => {
    slides[activeIndex].classList.remove('is-active');
    slides[activeIndex].setAttribute('aria-hidden', 'true');
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add('is-active');
    slides[activeIndex].setAttribute('aria-hidden', 'false');
  }, 2000);
}

// Arranque general
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('current-year').textContent = String(new Date().getFullYear());

  loadPersistedState();
  renderBrandsMarquee();
  renderProducts();
  renderReviews();
  renderCart();
  updateConsentUI();

  initScrollBehavior();
  initMobileMenu();
  initCatalogTabs();
  initDelegatedEvents();
  initCheckoutForm();
  initReviewForm();
  initModalsAndCookies();
  initHeroCarousel();
});