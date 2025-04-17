Front-end:
# Book Shop Application:

##  Live Demo
https://book-shop-frontend-vert.vercel.app


## Overview 

 "Book Shop" is a fully functional e-commerce platform for buying  books. It includes  authentication, product management, sorting and role-based access for users and admins. It is a responsive, user-friendly application.

## All Features:

## Authentication :

- User registration with "password hashing".
- Login with JWT-based authentication.
- Role-based access (`admin` and `user`).
- Logout functionality.

## Public Routes

- Home Page:
  - Navbar with navigation  buttons.
  - Banner with featured promotions.
  - Featured products (max 6) with a "View All" button.
  - Footer with social media links and contact details.
- All Products Page:
  - Search functionality by `title`, `author`, and `category`.
  - Filters for `price range`, `author`, `category`, and `availability`.
  - Dynamic product listing with details and a "View Details" button.
- Product Details Page:**
  - Displays book image, name, author, category, price, and description.
  - "Buy Now" button leading to checkout.
- About Page:
  - Information about the book shop and its mission.

## Private Routes:

- Checkout Page:
  - Users can place orders (ensuring stock availability).
  - Order form with product/user details, total price, and payment method.
  - **Payment Integration with STRIPE**.
- **Dashboard (Role-Based Access):**
  - **Admin Dashboard:** Manage users, products (CRUD), and orders (CRUD).
  - **User Dashboard:** View orders and manage profile settings.
  - Password update functionality (requires current password).


## Technologies Used

- Frontend: React.js, TypeScript, Tailwind CSS, Ant Design
- Backend:** Node.js, Express.js, MongoDB
- Authentication: JWT (JSON Web Token)
- State Management: Redux Toolkit
- Payment Gateway: Stripe
- Deployment: Vercel 



## Installation & Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB 

