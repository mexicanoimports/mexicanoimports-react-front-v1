import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { MenuProvider } from "./contexts/menuContext";
import { CartProvider } from "./contexts/cartContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import ProtectedRoute from './ProtectedRoute'
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import { PopUpProvider } from "./contexts/popUpContext";
import PetNutritionCalculator from "./pages/PetNutritionCalculator";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element:
      <ProtectedRoute>
        <ContactPage />
      </ProtectedRoute>,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {

    path: "/product/:productId",
    element: <ProductPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/:previousPage",
    element: <Login />,
  },
  {
    path: "/register",
    element:
      <Register />
  },
  {
    path: "/register/:previousPage",
    element:
      <Register />
  },
  {
    path: "/profile",
    element:
      <ProtectedRoute>
        <MyProfile />
      </ProtectedRoute>,
  },
  {
    path: "/pet-food",
    element:
      <PetNutritionCalculator />
  },
  {
    path: "/pet-food/:previousPage",
    element:
      <ProtectedRoute>
        <PetNutritionCalculator />
      </ProtectedRoute>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <PopUpProvider>
        <MenuProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </MenuProvider>
      </PopUpProvider>
    </HelmetProvider>
  </React.StrictMode>
);