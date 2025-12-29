# 🎧 AURA - Cyber-Luxury Audio E-Commerce

**AURA** is a high-fidelity, full-stack E-Commerce application designed for premium audio gear. It features a futuristic "Cyber-Luxury" aesthetic, seamless animations, and a robust MERN stack architecture.

![Project Banner](https://via.placeholder.com/1200x600/0a0a0a/00f3ff?text=AURA+E-Commerce+Preview)
*(Replace this link with a real screenshot of your Hero section after deployment)*

## 🚀 Live Demo

- **Frontend:** [Link to your Netlify App]
- **Backend:** [Link to your Render/Vercel API]

---

## 🛠️ Tech Stack

### Frontend
- **React (Vite):** Fast, modern UI development.
- **Redux Toolkit:** Global state management for Cart and UI logic.
- **Tailwind CSS:** Utility-first styling with a custom "Neon/Dark" design system.
- **Framer Motion:** Complex animations (page transitions, hover effects, modal interactions).
- **React Router DOM:** Client-side routing with scroll restoration.
- **Axios:** API integration.

### Backend
- **Node.js & Express:** RESTful API architecture.
- **MongoDB & Mongoose:** NoSQL database with schema modeling.
- **CORS & Dotenv:** Security and environment configuration.

---

## ✨ Key Features

- **🛍️ Full Shopping Experience:** Browse products, view details, and manage a shopping cart.
- **🎨 Dynamic Variant System:** Select different colors for products; the cart treats different variants as unique items.
- **🔍 Spotlight Search:** Instant, command-center style search modal that filters products in real-time.
- **📱 Mobile-First Design:** Fully responsive layout with a custom mobile navigation drawer.
- **⚡ Cart Drawer:** Smooth slide-out cart summary accessible from anywhere in the app.
- **💾 Database Seeding:** Custom script to populate the database with initial product data.
- **🔄 State Persistence:** Redux logic ensures cart state is managed efficiently during the session.

---

## ⚙️ Installation & Setup

Follow these steps to run AURA locally on your machine.

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas URL)

### 1. Clone the Repository
```
git clone https://github.com/linarifux/aura-ecommerce.git
cd aura-ecommerce
```

###  2. Backend Setup
- Navigate to the backend folder and install dependencies.

```
cd backend
npm install
```

- Configuration: Create a ```.env``` file in the backend folder:
```
PORT=5000
MONGO_URI=mongodb+srv://<your-db-connection-string>
NODE_ENV=development
```

- Seed the Database: Populate your MongoDB with the initial product data.
```
node seed.js
```

- Start Server:
```
npm run dev
# Server runs on http://localhost:5000
```
### 3. Frontend Setup

- Open a new terminal, navigate to the frontend folder, and install dependencies.

```
cd ../frontend
npm install
```
- Configuration: Create a ```.env``` file in the frontend folder (optional for local, required for prod):

```
VITE_API_URL=http://localhost:5000/api
```
- Start Application:

```
npm run dev
# App runs on http://localhost:5173
```
### 📡 API Endpoints
```
Method	Endpoint	Description
GET	/api/products	Fetch all products
GET	/api/products/:id	Fetch single product by custom ID
```

### 🔮 Future Improvements
- [ ] Stripe Integration: Replace checkout simulation with real payment processing.

- [ ] User Authentication: JWT-based login for order history and saved addresses.

- [ ] Admin Dashboard: GUI for adding/editing products without using seed scripts.

- [ ] Reviews System: Allow users to leave ratings and comments.

### 📝 License
- This project is open source and available under the MIT License.

### Designed & Developed by ```Naimul Islam```.