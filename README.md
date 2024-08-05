# <img src="src/assets/furniro-logo.svg" alt="Logotype" style="margin-left: 20px; vertical-align: middle; width: 100px" /> Furniro 

![Badge Status](http://img.shields.io/static/v1?label=STATUS&message=FINISH&color=GREEN&style=for-the-badge)

# About the Project

This project is an e-commerce application for interior furniture, developed using **React** and **TypeScript**. The application allows users to browse through a list of products, view detailed information about each item, add products to the cart, and complete the purchase after logging in.

## 📲 Main Features

- **User Authentication**: Log in with your email to access and manage your shopping cart and order details.
- **Shopping Cart**: Add products to your cart, adjust quantities, or remove items as needed. The purchase total is automatically updated.
- **Navigation and Pagination**: Easily browse through our furniture collection, with products organized into pages for easy viewing.
- **Checkout**: Securely complete your purchases after logging in. Ensure all your purchase details are correct before finalizing.
- **Responsive Experience**: Enjoy a seamless shopping experience, whether on mobile devices or desktops, with our fully responsive interface.

## 📚 Technologies Used

- **React** with **TypeScript**
- **Firebase** for authentication
- **React Router** for route management
- **Redux** for global state management
- **React Hook Form** and **Yup** for forms validation.
- **Splide** for carousels
- **JSON Server** for simulating the product API
- **Tailwind CSS** for styling
- **AWS S3** for image storage
- **AWS EC2** to host the web page (can be acessed by an URL)

## 🛠️ Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/lucaslapazini95/proj3-sem12.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the json-server in one terminal:

   ```bash
   npm run json-server
   ```

3. Start the development server in another terminal:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to view the application.
