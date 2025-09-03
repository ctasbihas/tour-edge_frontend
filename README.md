# Tour Edge Frontend

Tour Edge Frontend is a modern, responsive web application built with React, Vite, TypeScript, Redux Toolkit, and Tailwind CSS. It serves as the user interface for the Tour Edge platform, enabling users to discover, book, and manage tours, as well as handle authentication and payments. The frontend is tightly integrated with the Tour Edge Backend API, providing a seamless experience for both travelers and administrators.

---

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Project Structure](#project-structure)
-   [Environment Variables](#environment-variables)
-   [Getting Started](#getting-started)
-   [Scripts](#scripts)
-   [Core Functionality](#core-functionality)
    -   [Authentication & Authorization](#authentication--authorization)
    -   [Tour Discovery & Booking](#tour-discovery--booking)
    -   [User Dashboard](#user-dashboard)
    -   [Admin Panel](#admin-panel)
    -   [Payment Integration](#payment-integration)
-   [Validation & Error Handling](#validation--error-handling)
-   [UI/UX](#uiux)
-   [Contributing](#contributing)
-   [License](#license)

---

## Features

-   **User Authentication:** Login, registration, Google OAuth, JWT session management.
-   **Role-Based Access:** User, Guide, Admin, and Super Admin dashboards.
-   **Tour Discovery:** Browse, filter, and search tours by type, division, or keyword.
-   **Booking System:** Book tours, view booking history, and manage bookings.
-   **Payment Integration:** Secure online payments via SSLCommerz.
-   **Admin Tools:** Manage users, tours, divisions, bookings, and payments.
-   **Responsive Design:** Mobile-first, accessible, and visually appealing UI.
-   **Form Validation:** Robust client-side validation using Zod and React Hook Form.
-   **State Management:** Global state with Redux Toolkit.
-   **Notifications & Feedback:** User-friendly alerts and error messages.
-   **Modern UI Components:** Built with Radix UI, Lucide icons, and Tailwind CSS.

---

## Tech Stack

-   **React 19** (UI library)
-   **Vite** (blazing-fast build tool)
-   **TypeScript** (type safety)
-   **Redux Toolkit** (state management)
-   **React Router v7** (routing)
-   **Tailwind CSS** (utility-first styling)
-   **Radix UI** (accessible UI primitives)
-   **React Hook Form** (form management)
-   **Zod** (schema validation)
-   **Axios** (API requests)
-   **Lucide React** (icon library)
-   **ESLint** (linting & code quality)

---

## Project Structure

```
.
├── src/
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Route-based pages
│   ├── routes/             # Route definitions
│   ├── utils/              # Utility functions
│   └── main.tsx            # App entry point
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── ...
```

---

## Getting Started

1. **Clone the repository**

    ```sh
    git clone https://github.com/your-username/tour-edge-frontend.git
    cd tour-edge-frontend
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Configure environment variables** in `.env`

4. **Start the development server**

    ```sh
    npm run dev
    ```

5. **Build for production**

    ```sh
    npm run build
    ```

6. **Preview production build**
    ```sh
    npm run preview
    ```

---

## Scripts

-   **Start development server:**  
    `npm run dev`
-   **Build for production:**  
    `npm run build`
-   **Preview production build:**  
    `npm run preview`
-   **Lint code:**  
    `npm run lint`

---

## Core Functionality

### Authentication & Authorization

-   User registration and login with email/password.
-   Google OAuth integration.
-   JWT-based session management (tokens stored securely).
-   Role-based route protection (User, Guide, Admin, Super Admin).
-   Password reset and profile management.

### Tour Discovery & Booking

-   Browse all available tours with filters (type, division, price, etc.).
-   View detailed tour information.
-   Book tours and manage bookings.
-   View booking history and payment status.

### User Dashboard

-   Personalized dashboard for users to view and manage their bookings.
-   Profile management (update info, change password).
-   Booking status tracking and payment actions.

### Admin Panel

-   Manage users, tours, divisions, and bookings.
-   Create, update, and delete tours and divisions.
-   View and manage all bookings and payments.
-   Role management and access control.

### Payment Integration

-   Initiate and complete payments via SSLCommerz.
-   Handle payment success, failure, and cancellation.
-   Secure payment flow with backend integration.

---

## Validation & Error Handling

-   All forms use React Hook Form and Zod for robust validation.
-   User-friendly error messages and feedback.
-   Global error boundary for catching unexpected errors.

---

## UI/UX

-   Built with Tailwind CSS for rapid, consistent styling.
-   Uses Radix UI and Lucide icons for accessible, modern components.
-   Responsive layouts for mobile, tablet, and desktop.
-   Smooth animations with `tw-animate-css`.
-   Clean, intuitive navigation and dashboard layouts.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

This project is licensed under the ISC License.

---

## Acknowledgements

-   [React](https://react.dev/)
-   [Vite](https://vitejs.dev/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Radix UI](https://www.radix-ui.com/)
-   [Lucide Icons](https://lucide.dev/)
-   [React Hook Form](https://react-hook-form.com/)
-   [Zod](https://zod.dev/)
-   [SSLCommerz](https://developer.sslcommerz.com/)

---

_For more details, see the source code and inline documentation._
