import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./Features/Pages/Home";
import Shop from "./Features/Pages/Shop";
import ShopDetail from "./Features/Pages/Shop/ShopDetail";
import BlogPage from "./Features/Pages/Blog";
import ContactPage from "./Features/Pages/Contact";
import AboutUsPage from "./Features/Pages/AboutUs";
import GalleryPage from "./Features/Pages/Gallery";
import ChefPage from "./Features/Pages/Chef";
import ReservationPage from "./Features/Pages/Reservation";
import FAQPage from "./Features/Pages/FAQ";
import OrdersPage from "./Features/Pages/Orders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: < Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/shop/:id",
                element: <ShopDetail />,
            },
            {
                path: "/blog",
                element: <BlogPage />,
            },
            {
                path: "/about-us",
                element: <AboutUsPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/reservation",
                element: <ReservationPage />,
            },
            {
                path: "/gallery",
                element: <GalleryPage />,
            },
            {
                path: "/chefpage",
                element: <ChefPage />,
            },
            {
                path: "/faq",
                element: <FAQPage />,
            },
            {
                path: "/orders",
                element: <OrdersPage />,
            }

        ]
    }
])