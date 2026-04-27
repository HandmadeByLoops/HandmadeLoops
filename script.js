/* ==============================
   HANDMADE BY LOOPS — script.js
   ============================== */

// ─── DATA ────────────────────────────────────────────────────────────────────

const products = [
  {
    id: 1,
    name: "Blush Rose Crochet Flower",
    category: "Flowers",
    filter: "flowers",
    price: 350,
    tag: "bestseller",
    img: "\cover8.jpeg"
  },
  {
    id: 2,
    name: "Sunshine Keychain",
    category: "Keychains",
    filter: "keychains",
    price: 180,
    tag: "new",
    img: "\cover9.jpeg"
  },
  {
    id: 3,
    name: "Sage Green Market Tote",
    category: "Tote Bags",
    filter: "bags",
    price: 850,
    tag: "bestseller",
    img: "\cover10.jpeg"
  },
  {
    id: 4,
    name: "Mini Mushroom Keychain",
    category: "Keychains",
    filter: "keychains",
    price: 150,
    tag: "new",
    img: "\cover11.jpeg"
  },
  {
    id: 5,
    name: "Lavender Daisy Bunch",
    category: "Flowers",
    filter: "flowers",
    price: 420,
    tag: "bestseller",
    img: "\cover12.jpeg"
  },
  {
    id: 6,
    name: "Cream Bucket Tote",
    category: "Tote Bags",
    filter: "bags",
    price: 750,
    tag: "",
    img: "\cover13.jpeg"
  },
  {
    id: 7,
    name: "Strawberry Charm Keychain",
    category: "Keychains",
    filter: "keychains",
    price: 170,
    tag: "new",
    img: "\cover14.jpeg"
  },
  {
    id: 8,
    name: "Baby Pink Rose Cluster",
    category: "Flowers",
    filter: "flowers",
    price: 380,
    tag: "",
    img: "\cover15.jpeg"
  },
  {
    id: 9,
    name: "Boho Fringe Tote Bag",
    category: "Tote Bags",
    filter: "bags",
    price: 920,
    tag: "bestseller",
    img: "\cover16.jpeg"
  }
];

const blogPosts = [
  {
    id: 1,
    title: "A Beginner's Guide to Crochet",
    date: "March 12, 2025",
    img: "\cover20.jpeg",
    excerpt: "Thinking about picking up a crochet hook? Here's everything you need to start your journey into the world of yarn and loops.",
    tags: ["crochet", "beginner", "tutorial", "crafts", "yarn"],
    body: `
      <div class="post-header">
        <p class="section-eyebrow">March 12, 2025 · Beginner Guides</p>
        <h1 class="hero-title">A Beginner's Guide to Crochet</h1>
      </div>
      <div class="post-hero-img">
        <img src="\cover20.jpeg" alt="Crochet guide" />
      </div>
      <div class="post-body">
        <p>If you've ever watched someone crochet and thought, <em>"I could never do that"</em> — this post is for you. Crochet is one of the most accessible crafts in the world, and you don't need any experience to get started. All you need is a hook, some yarn, and a little patience.</p>

        <h2>What is Crochet?</h2>
        <p>Crochet is a method of creating fabric by interlocking loops of yarn using a single hook. Unlike knitting, which uses two needles, crochet uses just one — making it easier to pick up and put down without losing your work. The word "crochet" comes from the French word for "small hook," and that's essentially what it is: a small, elegant hook that transforms yarn into something beautiful.</p>

        <h2>What You'll Need to Start</h2>
        <p>To begin your crochet journey, you only need three things: a crochet hook (size 4.0mm or 5.0mm is ideal for beginners), medium-weight yarn (also called worsted weight), and a pair of scissors. That's it! Once you're comfortable, you can explore different hook sizes and yarn types.</p>

        <h2>Your First Stitch: The Chain</h2>
        <p>Every crochet project starts with a foundation chain. Hold the hook in your dominant hand and the yarn in the other. Make a slip knot on the hook, then pull the yarn through the loop to create your first chain stitch. Repeat this motion and you'll have a neat row of loops — that's your chain! From there, you'll learn the single crochet, double crochet, and more.</p>

        <h2>Tips for Beginners</h2>
        <p>Don't rush. Crochet is meant to be slow and meditative. Watch your tension — holding the yarn too tight will make it hard to insert the hook, while too loose will create uneven stitches. Practice the same stitch repeatedly before moving to a new one. And most importantly: it's okay to unravel and start again. Every expert crocheter has a pile of frogged (undone) projects behind them.</p>

        <p>Starting with something small and achievable, like a keychain or a small square, will build your confidence quickly. Before you know it, you'll be making bags, flowers, and full garments. Welcome to the wonderful world of crochet! 🧶</p>

        <div class="post-keywords">
          <span class="blog-tag">crochet</span>
          <span class="blog-tag">beginner</span>
          <span class="blog-tag">tutorial</span>
          <span class="blog-tag">crafts</span>
          <span class="blog-tag">yarn</span>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: "Why Handmade Products Are So Valuable",
    date: "April 2, 2025",
    img: "\cover18.jpeg",
    excerpt: "In a world of fast fashion and mass production, handmade goods carry something irreplaceable — the human touch.",
    tags: ["handmade", "value", "slow fashion", "craft", "small business"],
    body: `
      <div class="post-header">
        <p class="section-eyebrow">April 2, 2025 · Slow Living</p>
        <h1 class="hero-title">Why Handmade Products Are So Valuable</h1>
      </div>
      <div class="post-hero-img">
        <img src="\cover18.jpeg" alt="Handmade value" />
      </div>
      <div class="post-body">
        <p>We live in an age of instant everything. Same-day delivery, mass production, algorithmic shopping. You can buy almost anything in seconds — and receive it in hours. So where does that leave handmade? Somewhere far more valuable than ever before.</p>

        <h2>The Time Behind Every Piece</h2>
        <p>When you hold a handmade crochet item, you're holding hours of someone's time. A simple keychain might take 45 minutes. A tote bag could take an entire day. A custom bouquet? Several days of careful, focused work. That time is built into the price — and it should be. You're not just paying for materials; you're paying for skill, attention, and love.</p>

        <h2>No Two Are Exactly Alike</h2>
        <p>Mass-produced items are designed to be identical. Handmade items, by nature, can never be. Even when following the same pattern, slight differences in tension, colour, and technique mean that each piece is unique. When you buy handmade, you own something nobody else in the world has. That's remarkable — and increasingly rare.</p>

        <h2>The Environmental Argument</h2>
        <p>Handmade goods are typically produced in small batches or made-to-order, meaning there's less waste. There's no factory overproduction, no mountain of unsold goods. When you buy from a small maker, you're choosing a more sustainable consumption model. The materials are often higher quality too — made to last, not to be replaced.</p>

        <h2>Supporting Real People</h2>
        <p>Every handmade purchase supports a human being — not a corporation. It keeps a craft alive, supports a family, and encourages an individual to keep creating. The value of that exchange extends far beyond the product itself. It's an act of community.</p>

        <p>So the next time you hold a handmade item and think, "Is it worth the price?" — remember what's behind it. Time, care, skill, and a person who made it just for you. That's priceless. ✨</p>

        <div class="post-keywords">
          <span class="blog-tag">handmade</span>
          <span class="blog-tag">value</span>
          <span class="blog-tag">slow fashion</span>
          <span class="blog-tag">craft</span>
          <span class="blog-tag">small business</span>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "Our Small Business Journey",
    date: "April 18, 2025",
    img: "\cover19.jpeg",
    excerpt: "From a late-night YouTube tutorial to a real, running business — here's the honest story of how Handmade by Loops came to be.",
    tags: ["small business", "journey", "entrepreneur", "Pakistan", "crochet"],
    body: `
      <div class="post-header">
        <p class="section-eyebrow">April 18, 2025 · Our Story</p>
        <h1 class="hero-title">Our Small Business Journey</h1>
      </div>
      <div class="post-hero-img">
        <img src="\cover19.jpeg" alt="Small business journey" />
      </div>
      <div class="post-body">
        <p>Every business has an origin story. Ours starts in 2021 with a late-night YouTube rabbit hole, a ball of leftover yarn, and zero crochet experience. I was a student, I was bored, and I thought: "Let me try this." I had no idea it would change everything.</p>

        <h2>The First Hook</h2>
        <p>My first stitch was wonky. My first square was lopsided. My first "finished project" looked nothing like the tutorial. But I was hooked — no pun intended. There's something deeply satisfying about watching a pile of yarn transform into something real and tangible using just your hands. I couldn't stop.</p>

        <h2>From Hobby to Business</h2>
        <p>I started giving my creations away as gifts. A keychain here, a small flower there. The reactions were always the same: surprise, delight, and then — "Can you make me one?" That question changed everything. I started taking small orders from friends and classmates, and slowly, word spread.</p>

        <h2>The Challenges Nobody Talks About</h2>
        <p>Running a handmade business is beautiful, but it's also hard. There's the physical side — crocheting for hours hurts your hands. There's the business side — pricing, packaging, posting, customer communication. And there's the emotional side — impostor syndrome, comparing yourself to bigger brands, wondering if it's "worth it." It's a lot to carry alone.</p>

        <h2>Why I Keep Going</h2>
        <p>Because of the messages. The photos customers send when their order arrives. The "my daughter loves it" and "I cried when I opened it" moments. Those are the reasons. A small business isn't just a business — it's a relationship with the people you make things for.</p>

        <p>We're still small. We're still growing. But we're growing slowly and intentionally — which, honestly, feels exactly right. Thank you for being part of this journey. Every order you place helps us keep going. 🧶💕</p>

        <div class="post-keywords">
          <span class="blog-tag">small business</span>
          <span class="blog-tag">journey</span>
          <span class="blog-tag">entrepreneur</span>
          <span class="blog-tag">Pakistan</span>
          <span class="blog-tag">crochet</span>
        </div>
      </div>
    `
  }
];

// ─── CART ─────────────────────────────────────────────────────────────────────

let cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`${product.name} added to cart 🧶`);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);

  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartTotal = document.getElementById('cartTotal');

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <span>🧶</span>
        <p>Your cart is empty</p>
        <a href="#shop" class="btn btn-primary" data-page="shop" onclick="toggleCart()">Start Shopping</a>
      </div>`;
    cartFooter.style.display = 'none';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-img">
          <img src="${item.img}" alt="${item.name}" />
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">Rs. ${item.price} × ${item.qty}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    `).join('');

    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    cartTotal.textContent = `Rs. ${total.toLocaleString()}`;
    cartFooter.style.display = 'block';
  }
}

function toggleCart() {
  const modal = document.getElementById('cartModal');
  modal.classList.toggle('hidden');
}

// ─── TOAST ────────────────────────────────────────────────────────────────────

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position:fixed; bottom:32px; left:50%; transform:translateX(-50%) translateY(80px);
      background:#8B4B6B; color:#fff; padding:14px 28px; border-radius:999px;
      font-size:0.9rem; font-family:var(--font-sans); z-index:9999;
      box-shadow:0 8px 24px rgba(0,0,0,0.2); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);
      white-space:nowrap;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(80px)';
  }, 3000);
}

// ─── PRODUCT CARD RENDER ──────────────────────────────────────────────────────

function renderProductCard(product) {
  const tagHTML = product.tag
    ? `<span class="product-tag ${product.tag === 'new' ? 'new' : ''}">${product.tag === 'new' ? '✦ New' : '★ Bestseller'}</span>`
    : '';
  return `
    <div class="product-card" data-filter="${product.filter}">
      <div class="product-img">
        <img src="${product.img}" alt="${product.name}" loading="lazy" />
        ${tagHTML}
        <button class="product-wishlist" title="Add to wishlist" onclick="showToast('Added to wishlist 🌸')">🤍</button>
      </div>
      <div class="product-info">
        <p class="product-cat">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-footer">
          <span class="product-price">Rs. ${product.price}</span>
          <button class="add-cart-btn" onclick="addToCart(${product.id})">+ Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

// ─── BLOG CARD RENDER ─────────────────────────────────────────────────────────

function renderBlogCard(post) {
  return `
    <div class="blog-card" onclick="openBlogPost(${post.id})">
      <div class="blog-card-img">
        <img src="${post.img}" alt="${post.title}" loading="lazy" />
      </div>
      <div class="blog-card-info">
        <p class="blog-date">${post.date}</p>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <span class="blog-read-more">Read more →</span>
        <div class="blog-tags">
          ${post.tags.slice(0, 3).map(t => `<span class="blog-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ─── BLOG POST OPEN / CLOSE ───────────────────────────────────────────────────

function openBlogPost(id) {
  const post = blogPosts.find(p => p.id === id);
  if (!post) return;

  const content = document.getElementById('blogPostContent');
  const postView = document.getElementById('blogPost');
  const listView = document.querySelector('#blog .blog-grid');
  const pageHero = document.querySelector('#blog .page-hero');

  content.innerHTML = post.body;
  postView.classList.remove('hidden');
  if (listView) listView.classList.add('hidden');
  if (pageHero) pageHero.classList.add('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeBlogPost() {
  const postView = document.getElementById('blogPost');
  const listView = document.querySelector('#blog .blog-grid');
  const pageHero = document.querySelector('#blog .page-hero');

  postView.classList.add('hidden');
  if (listView) listView.classList.remove('hidden');
  if (pageHero) pageHero.classList.remove('hidden');
}

// ─── PAGE NAVIGATION ──────────────────────────────────────────────────────────

function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const page = document.getElementById(pageId);
  if (page) {
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll(`[data-page="${pageId}"]`).forEach(l => l.classList.add('active'));

  // Close mobile nav
  document.getElementById('navLinks').classList.remove('open');
}

// ─── SHOP FILTER ─────────────────────────────────────────────────────────────

function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('#shopProducts .product-card').forEach(card => {
        if (filter === 'all' || card.dataset.filter === filter ||
          (filter === 'new' && card.querySelector('.product-tag.new')) ||
          (filter === 'bestseller' && card.querySelector('.product-tag:not(.new)'))
        ) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));

  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }
}

// ─── TRACK ORDER ─────────────────────────────────────────────────────────────

function trackOrder(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const result = document.getElementById('trackResult');
  const id = input.value.trim();

  if (!id) return;

  // Demo tracking
  const statuses = [
    { status: '📦 Order Confirmed', detail: 'Your order has been received and is being prepared.' },
    { status: '🧶 Crafting in Progress', detail: 'Your item is being handmade with love.' },
    { status: '🚚 Shipped', detail: 'Your order is on its way! Expected delivery: 2–4 days.' },
    { status: '✅ Delivered', detail: 'Your order has been delivered. Enjoy!' }
  ];

  const random = statuses[Math.floor(Math.random() * statuses.length)];
  result.innerHTML = `<p><strong>${random.status}</strong><br/><span style="font-size:0.9rem;color:#9A7A7A">${random.detail}</span></p>`;
}

// ─── ACCOUNT TABS ─────────────────────────────────────────────────────────────

function switchTab(id, btn) {
  document.querySelectorAll('.acc-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.acc-tab').forEach(t => t.classList.remove('active'));

  const panel = document.getElementById(id);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
}

// ─── FORMS ───────────────────────────────────────────────────────────────────

function setupForms() {
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('formSuccess').classList.remove('hidden');
      contactForm.reset();
      showToast('Message sent! We\'ll reply soon 💌');
    });
  }

  // Subscribe form
  const subForm = document.getElementById('subscribeForm');
  if (subForm) {
    subForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('You\'re subscribed! 🌸 Welcome to the loop.');
      subForm.reset();
    });
  }
}

function subscribeFooter(e) {
  e.preventDefault();
  showToast('You\'re subscribed! Thanks for joining 💌');
  e.target.reset();
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function setupNavbar() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const navbar = document.getElementById('navbar');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Link clicks
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      if (page) navigateTo(page);
    });
  });

  // Cart icon
  document.querySelector('.nav-cart').addEventListener('click', (e) => {
    e.preventDefault();
    toggleCart();
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

function init() {
  // Render products on home page (first 6)
  const homeProducts = document.getElementById('homeProducts');
  if (homeProducts) {
    homeProducts.innerHTML = products.slice(0, 6).map(renderProductCard).join('');
  }

  // Render all products in shop
  const shopProducts = document.getElementById('shopProducts');
  if (shopProducts) {
    shopProducts.innerHTML = products.map(renderProductCard).join('');
  }

  // Render blog on home (first 3)
  const homeBlog = document.getElementById('homeBlog');
  if (homeBlog) {
    homeBlog.innerHTML = blogPosts.map(renderBlogCard).join('');
  }

  // Render blog page
  const blogPage = document.getElementById('blogPage');
  if (blogPage) {
    blogPage.innerHTML = blogPosts.map(renderBlogCard).join('');
  }

  // Setup
  setupNavbar();
  setupFilters();
  setupForms();
  updateCartUI();

  // Handle initial hash
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    navigateTo(hash);
  }
}

document.addEventListener('DOMContentLoaded', init);
