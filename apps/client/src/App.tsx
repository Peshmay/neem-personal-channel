import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MediaHubPage from "./pages/MediaHubPage";
import SanctuaryPage from "./pages/SanctuaryPage";
import ShopPage from "./pages/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "media", element: <MediaHubPage /> },
      { path: "sanctuary", element: <SanctuaryPage /> },
      { path: "shop", element: <ShopPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
