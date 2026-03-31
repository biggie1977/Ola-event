# Ola Event Management Services — Website

A full website for Ola Event Management Services, Lagos.

---

## 📁 Project Structure

```
ola-events/
├── index.html              ← ✅ STANDALONE VERSION (open directly in browser, no setup needed)
│
├── frontend/               ← React + Vite version
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── styles/
│       │   └── global.css
│       ├── components/
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       └── pages/
│           ├── Home.jsx
│           ├── Products.jsx
│           ├── Order.jsx
│           ├── About.jsx
│           └── Contact.jsx
│
└── backend/                ← Express.js API
    ├── server.js
    ├── package.json
    ├── data/
    │   └── products.js
    └── routes/
        ├── products.js
        ├── orders.js
        └── contact.js
```

---

## 🚀 Quick Start (Standalone)

Just open `index.html` in any web browser — no installation required!

---

## 🖥️ Running the React Frontend

```bash
cd frontend
npm install
npm run dev
# Opens at http://localhost:3000
```

---

## ⚙️ Running the Backend API

```bash
cd backend
npm install
npm start
# Runs at http://localhost:5000
```

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health | Health check |
| GET | /api/products | All products |
| GET | /api/products?category=staples | Filter by category |
| GET | /api/products?featured=true | Featured products |
| GET | /api/products/:id | Single product |
| POST | /api/orders | Submit order |
| GET | /api/orders | List all orders |
| POST | /api/contact | Send message |

---

## 📦 Products Offered

- 🍚 Bag of Rice (White Pearl) — 5kg, 10kg, 25kg, 50kg
- 🌻 Sunflower Vegetable Oil (Pura Refined) — 5L
- 🍝 Foreign Spaghetti (Simply/Tesco) — 500g packs & cartons
- 🥣 Quaker Oats — 500g, 1kg
- 🥗 Heinz Salad Cream
- 🍶 Heinz Mayonnaise
- 🍷 Light Live Alcohol-Free Wine (Red, White, Rosé)

---

## 📞 Business Details

**Ola Event Management Services**
- Address: Lagos Water Corporation Yard, Opp. Odo Eran Bus Stop, Akilo, Agege, Lagos
- Phone 1: 08035568223
- Phone 2: 07085294933
- TikTok: Coming soon

---

## 🎨 Design

- Color palette: Deep brown `#1A1208` + Gold `#C9943A` + Cream `#FAF5EC`
- Fonts: Playfair Display (headings) + DM Sans (body)
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and hover interactions
